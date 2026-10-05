document.addEventListener("nav", () => {
  if (document.body.dataset.slug !== "curriculum/Curriculum") return
  const article = document.querySelector<HTMLElement>(".center > article")
  if (!article || article.dataset.reorderReady) return
  article.dataset.reorderReady = "true"

  const controller = new AbortController()
  const signal = controller.signal
  const storagePrefix = "quartz:curriculum:v1:"
  const read = (key: string): string | null => {
    try {
      return localStorage.getItem(storagePrefix + key)
    } catch {
      return null
    }
  }
  const write = (key: string, value: string) => {
    try {
      localStorage.setItem(storagePrefix + key, value)
    } catch {
      // Keep the controls usable when browser storage is unavailable.
    }
  }
  const status = document.createElement("span")
  status.className = "curriculum-reorder-status"
  status.setAttribute("role", "status")
  status.setAttribute("aria-live", "polite")
  article.append(status)

  const resources = (list: HTMLElement) =>
    Array.from(list.children).filter(
      (child): child is HTMLLIElement =>
        child instanceof HTMLLIElement && child.classList.contains("curriculum-resource"),
    )
  const saveOrder = (list: HTMLElement) =>
    write(
      "order:" + list.dataset.orderKey,
      JSON.stringify(resources(list).map((li) => li.dataset.resourceKey)),
    )
  const announce = (item: HTMLLIElement, list: HTMLElement) => {
    status.textContent =
      item.dataset.resourceTitle +
      ", position " +
      (resources(list).indexOf(item) + 1) +
      " of " +
      resources(list).length +
      ". Order saved."
  }

  let cancelDrag: (() => void) | undefined
  for (const list of article.querySelectorAll<HTMLUListElement>("ul.contains-task-list")) {
    let heading = list.previousElementSibling
    while (heading && !heading.matches("h2, h3")) heading = heading.previousElementSibling
    list.classList.add("curriculum-resource-list")
    for (const item of Array.from(list.children)) {
      if (!(item instanceof HTMLLIElement)) continue
      const checkbox = item.querySelector<HTMLInputElement>('input[type="checkbox"]')
      const title = item.querySelector("strong")
      if (!checkbox || !title) continue
      const name = title.textContent?.trim() || "Resource"
      const key = title.querySelector("a")?.getAttribute("href") || name
      item.dataset.resourceKey = key
      item.dataset.resourceTitle = name
      item.classList.add("curriculum-resource")

      const content = document.createElement("span")
      content.className = "curriculum-resource-content"
      for (const child of Array.from(item.childNodes)) {
        if (child !== checkbox) content.append(child)
      }
      const handle = document.createElement("button")
      handle.type = "button"
      handle.className = "curriculum-drag-handle"
      handle.setAttribute("aria-label", "Reorder " + name)
      handle.title = "Drag to reorder, or use the up and down arrow keys"
      handle.innerHTML =
        '<svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true">' +
        '<circle cx="5" cy="4" r="1.5"/><circle cx="11" cy="4" r="1.5"/>' +
        '<circle cx="5" cy="10" r="1.5"/><circle cx="11" cy="10" r="1.5"/>' +
        '<circle cx="5" cy="16" r="1.5"/><circle cx="11" cy="16" r="1.5"/></svg>'
      item.append(content)
      item.prepend(handle)
      checkbox.disabled = false
      checkbox.setAttribute("aria-label", "Completed: " + name)
      const savedChecked = read("checked:" + key)
      if (savedChecked !== null) checkbox.checked = savedChecked === "true"
      checkbox.addEventListener(
        "change",
        () => {
          write("checked:" + key, String(checkbox.checked))
        },
        { signal },
      )

      handle.addEventListener(
        "keydown",
        (event) => {
          if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return
          event.preventDefault()
          const siblings = resources(list)
          const index = siblings.indexOf(item)
          if (event.key === "ArrowUp" && index > 0) list.insertBefore(item, siblings[index - 1])
          else if (event.key === "ArrowDown" && index < siblings.length - 1) {
            list.insertBefore(item, siblings[index + 1].nextSibling)
          } else return
          handle.focus({ preventScroll: true })
          saveOrder(list)
          announce(item, list)
        },
        { signal },
      )

      handle.addEventListener(
        "pointerdown",
        (event) => {
          if (!event.isPrimary || event.button !== 0) return
          event.preventDefault()
          cancelDrag?.()
          handle.focus({ preventScroll: true })
          handle.setPointerCapture(event.pointerId)
          const initialOrder = resources(list)
          const initialRect = item.getBoundingClientRect()
          const offsetY = event.clientY - initialRect.top
          const startY = event.clientY
          const startX = event.clientX
          const dragController = new AbortController()
          const dragSignal = dragController.signal
          let pointerY = startY
          let active = false
          let preview: HTMLElement | undefined
          let frame = 0

          const move = () => {
            if (!preview) return
            preview.style.transform = "translateY(" + (pointerY - offsetY) + "px)"
            const siblings = resources(list).filter((li) => li !== item)
            const next =
              siblings.find((li) => {
                const rect = li.getBoundingClientRect()
                return pointerY < rect.top + rect.height / 2
              }) || null
            if (next !== item.nextElementSibling) list.insertBefore(item, next)
          }
          const tick = () => {
            const edge = 64
            const speed =
              pointerY < edge
                ? -Math.min(12, (edge - pointerY) / 5)
                : pointerY > window.innerHeight - edge
                  ? Math.min(12, (pointerY - window.innerHeight + edge) / 5)
                  : 0
            if (speed) window.scrollBy(0, speed)
            move()
            frame = requestAnimationFrame(tick)
          }
          const finish = (cancelled: boolean) => {
            dragController.abort()
            cancelAnimationFrame(frame)
            preview?.remove()
            item.classList.remove("curriculum-drag-source")
            document.body.classList.remove("curriculum-dragging")
            if (handle.hasPointerCapture(event.pointerId))
              handle.releasePointerCapture(event.pointerId)
            if (active && cancelled) {
              for (const original of initialOrder) list.append(original)
              status.textContent = "Reorder cancelled."
            } else if (active) {
              saveOrder(list)
              announce(item, list)
            }
            handle.focus({ preventScroll: true })
            cancelDrag = undefined
          }
          cancelDrag = () => finish(true)
          document.addEventListener(
            "pointermove",
            (moveEvent) => {
              if (moveEvent.pointerId !== event.pointerId) return
              pointerY = moveEvent.clientY
              if (!active && Math.hypot(moveEvent.clientX - startX, pointerY - startY) < 6) return
              moveEvent.preventDefault()
              if (!active) {
                active = true
                preview = document.createElement("div")
                preview.className = "curriculum-resource curriculum-drag-preview"
                preview.setAttribute("aria-hidden", "true")
                preview.inert = true
                const clone = item.cloneNode(true) as HTMLLIElement
                for (const node of clone.querySelectorAll("[id]")) node.removeAttribute("id")
                preview.append(...Array.from(clone.childNodes))
                preview.style.width = initialRect.width + "px"
                preview.style.left = initialRect.left + "px"
                document.body.append(preview)
                item.classList.add("curriculum-drag-source")
                document.body.classList.add("curriculum-dragging")
                frame = requestAnimationFrame(tick)
              }
              move()
            },
            { signal: dragSignal, passive: false },
          )
          document.addEventListener(
            "pointerup",
            (endEvent) => {
              if (endEvent.pointerId === event.pointerId) finish(false)
            },
            { signal: dragSignal },
          )
          document.addEventListener(
            "pointercancel",
            (endEvent) => {
              if (endEvent.pointerId === event.pointerId) finish(true)
            },
            { signal: dragSignal },
          )
          document.addEventListener(
            "keydown",
            (keyEvent) => {
              if (keyEvent.key === "Escape") {
                keyEvent.preventDefault()
                finish(true)
              }
            },
            { signal: dragSignal },
          )
          window.addEventListener("blur", () => finish(true), { signal: dragSignal })
        },
        { signal },
      )
    }

    // Separate lists across dividers, and honor reordered resources in the source note.
    list.dataset.orderKey = JSON.stringify([
      heading?.id || "resources",
      resources(list).map((li) => li.dataset.resourceKey),
    ])
    const savedOrder = read("order:" + list.dataset.orderKey)
    if (savedOrder) {
      try {
        const keys: unknown = JSON.parse(savedOrder)
        if (Array.isArray(keys)) {
          const items = new Map(resources(list).map((li) => [li.dataset.resourceKey, li]))
          const ordered = keys.flatMap((key) => {
            const item = typeof key === "string" ? items.get(key) : undefined
            if (!item) return []
            items.delete(key)
            return [item]
          })
          list.append(...ordered, ...items.values())
        }
      } catch {
        // An invalid saved order falls back to the Markdown order.
      }
    }
  }
  window.addCleanup(() => {
    cancelDrag?.()
    controller.abort()
  })
})

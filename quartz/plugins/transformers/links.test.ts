import assert from "node:assert/strict"
import test from "node:test"
import type { Element, Root } from "hast"
import { unified } from "unified"
import { VFile } from "vfile"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
import { CrawlLinks } from "./links"

test("named folder notes publish and link directly to their canonical index pages", async () => {
  const allSlugs = ["Home", "notes/Notes", "notes/ipcv/IPCV", "notes/BCI/BCI"] as FullSlug[]
  const plugin = CrawlLinks({
    markdownLinkResolution: "shortest",
    folderNotes: ["Home.md", "notes/Notes.md", "notes/ipcv/IPCV.md"],
  })
  const processor = unified().use(plugin.htmlPlugins!({ allSlugs } as BuildCtx))
  const file = new VFile()
  file.data.slug = "notes/Notes" as FullSlug
  const links: Element[] = ["Home", "IPCV#Lectures", "notes/ipcv/IPCV.md", "BCI"].map((href) => ({
    type: "element",
    tagName: "a",
    properties: { href },
    children: [],
  }))
  const tree: Root = { type: "root", children: links }
  await processor.run(tree, file)

  assert.equal(file.data.slug, "notes/index")
  assert.deepEqual(
    links.map(({ properties }) => [properties.href, properties["data-slug"]]),
    [
      ["../", "index"],
      ["../notes/ipcv/#lectures", "notes/ipcv/index"],
      ["../notes/ipcv/", "notes/ipcv/index"],
      ["../notes/BCI/BCI", "notes/BCI/BCI"],
    ],
  )
  assert.deepEqual(file.data.links, ["/", "notes/ipcv/", "notes/BCI/BCI"])
})

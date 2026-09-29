
#### OOP
A class is a data type. An object is an instance of a class.

Function (method)

`self` 
- The first parameter is `self`, which refers to the object the method is acting on.
- When calling `obj.method()`, Python automatically passes `obj` as `self`.
- `self` refers to the current object. It lets each object store and use its own data.

**`__init__` and dunder (Magic) methods**

`__init__` is the **initializer** of a class. It runs automatically when you create a new object.

Methods like `__init__` that start and end with `__` are called **dunder methods** or **magic methods**.

```python

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def __add__(self, other):
        newx = self.x + other.x
        newy = self.y + other.y
        return Vector(newx, newy)

    def __str__(self):
        return "(%f, %f)" % (self.x, self.y)
        
u = Vector(3, 4) # calls Vector.__init__(u, 3, 4), self is u
        
```

Encapsulation
keep related data and methods together, and expose only the parts users of the class are supposed to interact with.

In Python, there is no strict enforcement, there is no formal mechanism to keep one from accessing attributes of a class from outside that class.

A convention is any attribute that starts with an underscore is considered private

```python
class Diary:
    def __init__(self, title):
        self.title = title
        self._entries = []

    def addentry(self, entry):
        self._entries.append(entry)

    def _lastentry(self):
        return self._entries[-1]

```

`title` and `addentry()` are public while `_entries` and `_lastentry()` are private by convention.

Inheritance 

```python

class Polygon:
    def __init__(self, sides, points):
        self._sides = sides
        self._points = list(points)

    def sides(self):
        return self._sides


class Triangle(Polygon):
    def __init__(self, points):
        Polygon.__init__(self, 3, points)


class Square(Polygon):
    def __init__(self, points):
        Polygon.__init__(self, 4, points)
```

The superclass `__init__` is automatically inherited only if the subclass does not define its own `__init__`. If the subclass defines its own `__init__`, the superclass initializer must be called explicitly.

Python has built-in (parametric) polymorphism

---
#### Abstract Data Type

- **ADT defines what a data structure should do, not how it is implemented**.
- Its like an **interface/contract**.
- It specifies:
    - what data is represented,
    - what operations/methods are available,
    - expected inputs/outputs,
    - possible errors.
- A **data structure is a concrete implementation of an ADT**.
- The same ADT can have different implementations.

Example : 
Stack ADT
- Operations:
    - `push(item)` → add item to the top
    - `pop()` → remove and return the top item
    - `peek()` → view the top item without removing it
    - `len(stack)` → number of items
    - `isempty()` → checks if stack is empty Data Structures In Python
- It gives a **standard interface** (`push`, `pop`, `peek`, `len`, `isempty`) without exposing how the stack is implemented. The user only needs to know **what the stack does**, not whether it internally uses a list or something else.
- This allows us change to the internal implementation later without changing code that uses the stack.

Queue ADT

```python
class ListQueue:

    def __init__(self):
        self._L = []
        self.head = 0

    def enqueue(self,item):
        self._L.append(item)

    def peek(self):
        self._L[self.head]    

    def __len__(self):
        return len(self._L) - self.head

    def isempty(self):
        return len(self) == 0

    # def dequeue(self):
    #     return self._L.pop(0

	# lazy update
    def dequeue(self):
        item = self._L[self.head]
        self.head += 1        
        if self.head > len(self._L) // 2 :
            self._L = self._L[self.head:]
            self.head = 0
        return item        

# most dequeue() calls      → O(1)
# occasional cleanup call   → O(n)
# Most dequeues are cheap. As the expensive cleanup happens rarely, the average cost over many dequeues is still O(1)
```

Deque ADT
- A **Deque (double-ended queue)** allows adding and removing items from **both ends**.
- Operations:
    - `addfirst(item)` → add to the front
    - `addlast(item)` → add to the end
    - `removefirst()` → remove and return first item
    - `removelast()` → remove and return last item
    - `len()` → number of items

Implementation
- Using a Python list:
    - operations at the end (`append`, `pop`) are efficient.
    - `insert(0, item)` and `pop(0)` are **O(n)** because all other elements have to shift.
- Using a Linked List:
    - items are stored in **nodes**, where each node links to the next node.
    - `addfirst()` and `removefirst()` are **O(1)** because no elements need to shift.    - 
    - `removelast()` is still **O(n)** in a singly linked list because we must traverse the list to find the node before the tail.
    - This allows a Queue to use `addlast()` for `enqueue()` and `removefirst()` for `dequeue()`, giving both **O(1)** operations.

LinkedList
- A **Linked List** stores items in separate objects called **nodes** instead of storing them sequentially in memory.
- Each node stores:
    - `data` → the actual item
    - `link` → reference to the next node
- `_head` points to the first node.
- The last node has `link = None`.

```python
class ListNode:
    def __init__(self, data, link=None):
        self.data = data
        self.link = link
        
class LinkedList2:

    def __init__(self):
        self._head = None  
        self._tail = None # `_tail` lets `addlast()` be **O(1)**.
        self._length = 0


    def addfirst(self, item):
        self._head = ListNode(item, self._head)
        if self._tail is None:
            self._tail = self._head
        self._length += 1
  

    def addLast(self, item):
        if self._head is None:
            self.addfirst(item)
        else:
            self._tail.link = ListNode(item)
            self._tail = self._tail.link
            self._length += 1

    def removefirst(self):
        item = self._head.data
        self._head = self._head.link
        if self._head is None:
            self._tail = None
        self._length -= 1
        return item

    def removeLast(self):
        if self._head is self._tail:
            return self.removefirst()
        else:
            currentNode = self._head
            while currentNode.link is not self._tail:
                currentNode = currentNode.link
            item = self._tail.data
            self._tail = currentNode
            self._tail.link = None
            self._length -= 1
            return item

    def __len__(self):
        return self._length        
        
```

Queue using a Linked List

```python
class LinkedQueue:
    def __init__(self):
        self._L = LinkedList()

    def enqueue(self, item):
        self._L.addlast(item)

    def dequeue(self):
        return self._L.removefirst()

    def __len__(self):
        return len(self._L)

    def isempty(self):
        return len(self) == 0
```

   




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

Common Magic Methods

- `__init__` → initialize an object
   `x = MyClass()`

- `__str__` → controls `str(obj)` / `print(obj)`
   `print(x)`

- `__len__` → controls `len(obj)`
   `len(x)`

- `__getitem__` → controls indexing
   `x[2]`

- `__setitem__` → controls assignment by index/key
   `x[2] = 10`

- `__contains__` → controls `in`
   `5 in x`

- `__iter__` → makes an object iterable
   `for item in x:`

- `__add__` → controls `+`
   `a + b`

- `__iadd__` → controls `+=`
   `a += b`

- `__bool__` → controls truth testing
   `if x:`

- `__call__` → lets an object be called like a function
   `x()`


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

	```python
	class ListDeque:
    def __init__(self):
        self._L = []

    def addfirst(self, item):
        self._L.insert(0, item)

    def addlast(self, item):
        self._L.append(item)

    def removefirst(self):
        return self._L.pop(0)

    def removelast(self):
        return self._L.pop()

    def __len__(self):
        return len(self._L)
	```


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

# All of the basic operations ran in constant time except removelast

```


Doubly-Linked Lists
- A **doubly linked list** stores two links in each node:
    - `prev` → previous node
    - `link` → next node
- This allows traversal in **both directions**.
- All basic Deque operations can be **O(1)**.

```python
class ListNode:
    def __init__(self, data, prev=None, link=None):
        self.data = data
        self.prev = prev
        self.link = link

        if prev is not None:
            self.prev.link = self

        if link is not None:
            self.link.prev = self

class DoubleLinkedList:

    def __init__(self):
        self._head = None
        self._tail = None
        self._length = 0


    def addfirst2(self, item):
        if len(self) == 0:
            self._head = self._tail = ListNode(item, None, None)
        else:
            newnode = ListNode2(item, None, self._head)
            self._head.prev = newnode
            self._head = newnode
        self._length += 1


    def addlast2(self, item):
        if len(self) == 0:
            self._head = self._tail = ListNode(item, None, None)
        else:
            newnode = ListNode2(item, self._tail, None)
            self._tail.link = newnode
            self._tail = newnode
        self._length += 1

    def __len__(self):
        return self._length

    #Refactor the common logic into one 
    def _addbetween(self, item, before, after):
        node = ListNode2(item, before, after)
        if after is self._head:
            self._head = node
        if before is self._tail:
            self._tail = node
        self._length += 1

    def addfirst(self, item):
        self._addbetween(item, None, self._head)

    def addlast(self, item):
        self._addbetween(item, self._tail, None)

    def _remove(self, node):
        before, after = node.prev, node.link
        if node is self._head:
            self._head = after
        else:
            before.link = after
        if node is self._tail:
            self._tail = before
        else:
            after.prev = before
        self._length -= 1
        return node.data

    def removefirst(self):
        return self._remove(self._head)

    def removelast(self):
        return self._remove(self._tail)

    # The magic method for +=
    def __iadd__(self, other):
        if other._head is not None:
            if self._head is None:
                self._head = other._head
            else:
                self._tail.link = other._head
                other._head.prev = self._tail
            self._tail = other._tail
            self._length = self._length + other._length
        other.__init__()
        return self   

```

---
Python has a limit on the recursion depth. This limit is usually around 1000.

```python
A = [2]
B = [2]

A.append(A)
B.append(B)

# A == B
#  ├─ 2 == 2      
#  └─ A == B
#       ├─ 2 == 2  
#       └─ A == B
#            ├─ 2 == 2
#            └─ A == B
#                 ...


# print(A == B)
# Traceback (most recent call last):  in A == B RecursionError: maximum recursion depth exceeded in comparison

# To change the limit
import sys
sys.setrecursionlimit(5000)

```

The Fibonacci Sequence : 

Iterative Fibonacci : 
```python
def fib(k):
    a,b = 0,1
    for i in range(k):
        a,b = b, a+b
    return a
```
The running time is: ${O(k)}$ and the extra space is: ${O(1)}$

Recurrence Fibonacci :
The Fibonacci recurrence is:
$$  
F_k = F_{k-1} + F_{k-2}  
$$
```python
def fib(k):
    if k in [0,1]:
        return k
    else:
        return fib(k-1) + fib(k-2)
```

For one call to `fib(k)` :

```
1 call for fib(k) itself
+
all calls needed for fib(k-1)
+
all calls needed for fib(k-2)
```

The same Fibonacci values has to be recomputed many times.
Example:
$$  
T(6) = T(5) + T(4) + 1  
$$
$$  
12 + 7 + 1 = 20  
$$

$$  
T(k) = \text{number of calls made when computing } \operatorname{fib}(k)  
$$
$$  
T(k) = T(k-1) + T(k-2) + 1  
$$
Let
$$  
S(k) = T(k) + 1  
$$
$$  
T(k) = T(k-1) + T(k-2) + 1  
$$

We get $$  
S(k) = S(k-1) + S(k-2)  
$$
This is same as the **Fibonacci recurrence**. $T(k)$ grows like the Fibonacci numbers.

The Fibonacci numbers grow approximately as:

$$  
F_k \approx \frac{\varphi^k}{\sqrt{5}}  
$$

where:

$$  
\varphi \approx 1.618  
$$
$$  
{T(k) = O(\varphi^k)}  
$$

So the running time has **exponential growth**.

GCD (EUCLID’S ALGORITHM)

The input is a pair of integers a, b and the output is the greatest common divisor.

We know
$$
\boxed{
\text{common divisors of }(a,b)
=
\text{common divisors of }(a,b-a)
}
$$

and therefore their **greatest** common divisor is also the same.

example:
$$
\gcd(12,18)=\gcd(12,6) = 6
$$

So instead of solving the original problem, we solve a smaller version of the same problem:

Also Repeated subtraction is doing division slowly. `%` lets us do all those subtractions at once.
$$
\boxed{\gcd(a,b)=\gcd(a,b \bmod a)}
$$
because the remainder is exactly what is left after subtracting `a` from `b` as many times as possible.

Example:
$$
\gcd(3,20)
=
\gcd(3,2)
=
\gcd(2,1)
=
\gcd(1,0)
=
1
$$

```python
def gcd2(a, b):
    if a > b:
        a,b = b,a
    if a == 0:
        return b
    return gcd(a, b%a)
```

For ordinary integers, this process eventually reaches the base case:

$$
\gcd(a,0)=a
$$

If $a$ and $b$ are rational numbers, the algorithm is still guaranteed to terminate.

For **irrational numbers** 
$$
(a,b)\rightarrow(b-a,a)
$$

the new pair can have the **same ratio** as the old pair.

Then the same pattern repeats forever, so the algorithm never reaches the base case.

$$
\frac{b}{a}=\frac{a}{b-a}
$$

Let:

$$
a=1,\qquad b=\phi
$$

where $\phi$ is the **golden ratio**:

$$
\phi=\frac{1+\sqrt{5}}{2}
$$

The golden ratio satisfies:

$$
\phi-1=\frac{1}{\phi}
$$

$$
(1,\phi)
\rightarrow
(\phi-1,1)
=
\left(\frac{1}{\phi},1\right)
$$

Now the ratio is still:

$$
\frac{1}{1/\phi}=\phi
$$

$$
(1,\phi)
\rightarrow
\left(\frac{1}{\phi},1\right)
\rightarrow
\left(\frac{1}{\phi^2},\frac{1}{\phi}\right)
\rightarrow
\cdots
$$

The numbers keep getting smaller, but the ratio stays the same. So the algorithm never reaches the base case.

---




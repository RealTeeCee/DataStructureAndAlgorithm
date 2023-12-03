# Stack:
+ What is Stack?
    - A Stack is a generic data structure that represents a LIFO (Last In First Out) collection of objects allowing for pushing/popping elements in constant time. Think of it as a stack of plates where you can only access the topmost plate.
    
+ Key characteristics:
    * One Access Point: A stack typically provides only one access point, known as the top of the stack. All insertions and removals happen at this point.

    * Fixed Size or Dynamic: Stacks can have a fixed size, meaning they can hold a predetermined number of elements. Alternatively, they can be dynamic, allowing for resizing as elements are added or removed.

    * Efficient Insertion and Removal: Adding or removing elements from the stack has a constant-time complexity of O(1). This is because the top of the stack is always accessible, and no traversal or shifting of elements is required.

    * Limited Access: In a stack, only the topmost element is directly accessible. Other elements in the stack cannot be accessed directly unless they are popped off the stack.

    * No Random Access: Stacks do not support random access of elements based on an index. To access elements, you need to pop them off the stack one by one until you reach the desired element.

    * Stack Overflow and Underflow: Stack overflow occurs when the stack is full and a push operation is attempted, resulting in an error. Stack underflow occurs when the stack is empty, and a pop operation is attempted, also resulting in an error.

    * Efficient Space Utilization: Stacks use memory efficiently as they only require memory for the elements present in the stack. Unused memory is not allocated.

+ Realworld Usecases:
    * Function Call Stack: In programming, a stack is commonly used to manage function calls. When a function is called, its local variables and return address are pushed onto the stack. This allows the program to keep track of the order in which functions are called and return from them correctly.

    * Web Browser History: Web browsers typically use a stack data structure to maintain the history of visited web pages. Each time a user visits a new page, the URL is pushed onto the stack. When the user clicks the back button, the most recently visited URL is popped from the stack, allowing them to navigate backward through their browsing history.
    (*** For Browser History functionality, a LinkedList is typically a better choice.)

    * Undo/Redo Functionality: Many software applications provide undo and redo functionality, allowing users to revert or repeat actions. Stacks are commonly employed to implement this feature. Each action performed is pushed onto the undo stack, and when the user requests an undo, the most recent action is popped from the undo stack and applied inversely. The undone actions can be stored on a redo stack to allow the user to redo them if needed.

    * Expression Evaluation: Stacks are often used in compilers and interpreters to evaluate mathematical expressions. When an expression is parsed, the operators and operands are pushed onto a stack. The stack helps maintain the correct order of operations, allowing the expression to be evaluated correctly.

    * Backtracking Algorithms: Backtracking algorithms, such as depth-first search, frequently use stacks to explore and backtrack through a search space. The stack stores the current path or state, allowing the algorithm to backtrack when necessary and explore other possibilities.

+ Big(O) Notation:
____________________________________________________________________________________________________________________
                            Time Complexity	                                                    |  Space Complexity
                Average	                        |                   Worst	                    |       Worst
Access	    Search	  Insertion   Deletion      |   Access	    Search	   Insertion  Deletion  |___________________ 
O(n)        O(n)	    O(1)	   O(1)         |    O(n)	     O(n)	    O(1)	    O(1)    |        O(n)
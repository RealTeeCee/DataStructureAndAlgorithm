# Recursion
+ What is Recursion?
    - Recursion is a programming concept where a function or method calls itself within its own body. In other words, it is a technique in which a problem is solved by breaking it down into smaller, simpler versions of the same problem.
    - When a function calls itself, it enters into a new instance of that function, known as a recursive call. This process continues until a base case is reached, which is a condition that terminates the recursion and stops the function from calling itself further. The base case is crucial to avoid infinite recursion and ensure that the recursion eventually terminates.

+ Key characteristic:
    * Base Case: A base case is a condition that specifies when the recursion should stop. It provides a terminating condition that allows the recursive calls to eventually reach a point where they no longer need to call themselves.

    * Recursive Case: The recursive case defines the problem in terms of a smaller or simpler version of the same problem. It is the part of the recursive function where the function calls itself with a modified set of parameters or input.

    * Call Stack: When a function calls itself recursively, each recursive call creates a new instance of the function on the call stack. The call stack keeps track of the order and state of function calls, allowing the program to return to the correct point after each recursive call completes.

    * Indirect Recursion: Indirect recursion occurs when a function A calls a function B, which in turn calls function A or calls another function that eventually leads back to function A. This creates a circular chain of recursive calls.

    * Tail Recursion: Tail recursion is a special case of recursion where the recursive call is the last operation performed in a function. In languages that support tail call optimization, tail-recursive functions can be optimized to avoid excessive stack space usage.

+ Realworld Usecases:
    * File System Traversal: When working with file systems, recursion is often used to traverse directory structures. Starting from a root directory, a recursive function can be used to explore all subdirectories and files within the file system. This approach is commonly used in operations such as searching for specific files, calculating file sizes, or performing backups.

    * Mathematical Calculations: Many mathematical problems can be solved using recursion. For example, calculating the factorial of a number, finding Fibonacci numbers, or solving problems related to permutations and combinations often involve recursive algorithms.

    * Tree and Graph Traversal: Traversing and searching through hierarchical data structures like trees and graphs can be efficiently accomplished using recursion. Recursive algorithms like depth-first search (DFS) and breadth-first search (BFS) are commonly used to explore and process nodes in these structures.

    * Backtracking Algorithms: Backtracking is a technique that involves exploring all possible solutions to a problem by incrementally building a solution and then undoing or "backtracking" if it leads to an invalid or unsatisfactory solution. Recursive backtracking algorithms are used in various scenarios such as solving puzzles (e.g., Sudoku, N-Queens), generating permutations or combinations, or solving constraint satisfaction problems.

    * Fractals and Graphics: Recursive algorithms are widely used in generating fractal patterns, which are complex and self-similar geometric shapes. Fractals like the Mandelbrot set or the Koch curve are created by recursively applying simple transformations or calculations to smaller portions of the fractal, resulting in intricate and visually appealing patterns.

+ Big(O) Notation:
    - Let's explore some common scenarios for recursion and their associated time complexities:

    * Linear Recursion (One Recursive Call): In this scenario, each recursive call is made only once. The time complexity can be described as O(n), where n represents the number of recursive calls or the size of the input. For example, recursive algorithms that traverse a linked list or an array using a single recursive call would have a linear time complexity.

    * Binary Recursion (Two Recursive Calls): In this scenario, each recursive call is made twice. The time complexity can be described as O(2^n), where n represents the number of recursive calls or the size of the input. For example, recursive algorithms that generate all subsets or permutations of a set would have an exponential time complexity.

    * Multiple Recursive Calls: Some recursive algorithms make multiple recursive calls in each step. The time complexity for such algorithms depends on the number of recursive calls made and the size of the input. It can be described using various notations, such as O(k^n), where k represents the number of recursive calls, or O(n^k), where n represents the size of the input and k represents the depth of recursion.
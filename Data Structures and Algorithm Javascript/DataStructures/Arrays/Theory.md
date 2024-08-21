# Array: 
# What is Array?
    - An array is a fundamental data structure that stores a fixed-size sequence of elements of the same type in contiguous memory locations. It provides efficient random access to individual elements based on their index.
    - An ArrayList() in Java have default size is 10.

# Key Characteristics:
    * Fixed Size: Arrays have a predetermined size that is fixed at the time of creation. Once the size is defined, it typically cannot be changed dynamically. Some programming languages provide dynamic arrays or resizable arrays that allow for flexible sizing.

    * Contiguous Memory: The elements in an array are stored in adjacent memory locations. This contiguous memory layout enables efficient access to any element using its index. The index is an integer value that represents the position of an element within the array.

    * Homogeneous Elements: Arrays store elements of the same data type. All elements in an array must have the same size and occupy the same amount of memory. For example, an array of integers will store only integer values, and an array of strings will store only string values.

    * Zero-based Indexing: Most programming languages use zero-based indexing for arrays, meaning the first element is accessed using an index of 0, the second element with an index of 1, and so on.

    * Random Access: Arrays provide efficient random access to elements based on their index. Accessing an element in an array has a constant-time complexity of O(1) since the index calculation directly maps to the memory location where the element is stored.

    * Iteration: Arrays can be easily traversed or iterated using loops or iterators. This allows for processing each element of the array sequentially.
    
# Array vs ArrayList?
    * Arrays are fixed size. Once we initialize the array with some int value as its size, it can’t change. The size and capacity are equal to each other too.
    * ArrayList ‘s size and capacity are not fixed. The logical size of the list changes based on the insertion and removal of elements in it. This is managed separately from its physical storage size. Also when the threshold of ArrayList capacity is reached, it increases its capacity to make room for more elements.

# Realworld Usecases:
    * Data Storage: Arrays are commonly used to store collections of data in a structured manner. For instance, in a spreadsheet application, an array can be used to store tabular data, with each row representing a record and each column representing a field. Arrays allow for efficient access and manipulation of data elements.

    * Image Processing: Arrays are extensively used in image processing algorithms. An image can be represented as a two-dimensional array, where each element corresponds to a pixel value. Image filters, transformations, and operations like convolution can be performed on the array to manipulate and analyze images.

    * Searching and Sorting: Arrays are often employed in searching and sorting algorithms. For instance, in a phonebook application, names and corresponding phone numbers can be stored in an array. Searching for a specific name can be done by traversing the array, while sorting the names alphabetically can be achieved using sorting algorithms like quicksort or mergesort.

    * Dynamic Programming: Dynamic programming is a technique used to solve complex problems by breaking them down into overlapping subproblems. Arrays are commonly used to store and retrieve the results of subproblems, reducing redundant computation and improving efficiency. This approach is utilized in various domains like optimization problems, sequence alignment, and resource allocation.

    * Statistical Analysis: Arrays are crucial in statistical analysis and data science. Statistical models often involve large datasets stored in arrays, enabling efficient calculations and analysis. Arrays allow for operations such as calculating means, variances, correlations, and performing regression analysis on datasets.

# Advantage & Disadvantage
+ Advantage: 
- Fast Lookups
- Fast push/pop
- Ordered

+ Disadvantage:
- Slow inserts (position)
- Slow deletes
- Fixed Size (*If using static array)

# Big(O) Notation:
____________________________________________________________________________________________________________________
                            Time Complexity	                                                    |  Space Complexity
                Average	                        |                   Worst	                    |       Worst
Access	    Search	  Insertion   Deletion      |   Access	    Search	   Insertion  Deletion  |___________________ 
O(1)	    O(n)	    O(n)	   O(n)         |    O(1)	     O(n)	    O(n)	    O(n)    |        O(n)
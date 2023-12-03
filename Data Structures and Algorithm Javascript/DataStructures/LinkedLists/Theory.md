# LinkedList
+ What is LinkedList?
    - A linked list is a linear data structure that consists of a sequence of elements called Nodes. Each node contains a value and a reference (or Pointer) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation. Instead, they are composed of individual nodes linked together through these references.
    - Dynamic data structure whose size increases as you add the elements and decreases as you remove
    - It's a list that is linked
    - Contain a set of Node. Each node have two element: value of data you want to store and pointer to the next node in line
    - First node is head and the last is tail.

+ Key Characteristics:
    * Nodes: Each node in a linked list contains two main components: the data value it holds and a reference to the next node in the sequence. In some cases, a doubly linked list may have an additional reference to the previous node.

    * Head and Tail: The first node in a linked list is called the head, while the last node is called the tail. The head serves as the starting point for accessing elements, and the tail points to null or an empty reference, indicating the end of the list.

    * Dynamic Size: Linked lists can grow or shrink dynamically as elements are added or removed. This flexibility allows for efficient insertion and deletion operations compared to arrays, as it doesn't require shifting elements.

    * Sequential Access: To access elements in a linked list, you start from the head and follow the references to traverse the list sequentially. Each node's reference points to the next node in the sequence until reaching the tail.

    * Insertion and Deletion: Inserting or deleting a node in a linked list involves adjusting the references of neighboring nodes. Insertion typically involves creating a new node, updating the references of adjacent nodes, and redirecting the references to maintain the connected sequence.

    * No Random Access: Unlike arrays, linked lists do not provide direct random access to elements based on an index. To access an element at a particular position, you need to traverse the list sequentially from the head until reaching the desired node.

    * Variations: Linked lists come in different variations, such as singly linked lists, doubly linked lists, and circular linked lists. Doubly linked lists have references to both the next and previous nodes, enabling traversal in both directions. Circular linked lists have their tail node pointing back to the head, creating a circular structure.

+ Realworld Usecases:
    * Music or Playlist Management: LinkedLists can be used to manage playlists in music applications. Each song can be represented as a node in the LinkedList, with each node containing information about the song and a reference to the next song in the playlist. LinkedLists allow for easy insertion and removal of songs, enabling dynamic playlist management.

    * Train or Bus Scheduling: LinkedLists can be used to represent schedules in transportation systems. Each node in the LinkedList can represent a stop along a route, containing information such as arrival and departure times, as well as references to the next and previous stops. LinkedLists provide efficient insertion and deletion of stops, allowing for easy modification of schedules.

    * Browser History: LinkedLists are commonly used to implement browser history functionality. Each visited webpage can be represented as a node in the LinkedList, with each node containing the URL and references to the previous and next visited pages. LinkedLists enable easy navigation through the browsing history by traversing the list forward and backward.

    * Undo/Redo Functionality: LinkedLists are often used to implement undo and redo functionality in applications. Each action performed can be represented as a node in the LinkedList, allowing for efficient undoing and redoing of actions. LinkedLists provide constant-time insertion and deletion, making them suitable for managing a sequence of actions. 
    (*** For undo/redo functionality, a Stack is typically a better choice.)

    * Polynomial Manipulation: LinkedLists are frequently used to represent and manipulate polynomials in mathematics and computer science. Each term of a polynomial can be represented as a node in the LinkedList, containing information such as the coefficient and exponent. LinkedLists provide efficient insertion and deletion of terms, facilitating polynomial addition, subtraction, and multiplication operations.

+ Big(O) Notation:
  * SinglyLinkedList
____________________________________________________________________________________________________________________
                            Time Complexity	                                                    |  Space Complexity
                Average	                        |                   Worst	                    |       Worst
Access	    Search	  Insertion   Deletion      |   Access	    Search	   Insertion  Deletion  |___________________ 
O(n)        O(n)	    O(1)	   O(1)         |    O(n)	     O(n)	    O(1)	    O(1)    |        O(n)

  * DoublyLinkedList
____________________________________________________________________________________________________________________
                            Time Complexity	                                                    |  Space Complexity
                Average	                        |                   Worst	                    |       Worst
Access	    Search	  Insertion   Deletion      |   Access	    Search	   Insertion  Deletion  |___________________ 
O(n)        O(n)	    O(1)	   O(1)         |    O(n)	     O(n)	    O(1)	    O(1)    |        O(n)
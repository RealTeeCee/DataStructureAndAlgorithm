* Queue: 
+ What is Queue?
    - Object that represents a data structure designed to have the element inserted at the end of the queue, and the element removed from the beginning of the queue or FIFO (First-In-First-Out). Think of it as a line of people waiting in a queue.

+ Key Characteristics:
    * Fixed Size or Dynamic: Queues can have a fixed size, meaning they can hold a predetermined number of elements. Alternatively, they can be dynamic, allowing for resizing as elements are added or removed.

    * Efficient Insertion and Removal: Adding or removing elements from the queue has a constant-time complexity of O(1). This is because the front and rear of the queue are always accessible, and no traversal or shifting of elements is required.

    * Limited Access: In a queue, only the front element is directly accessible. Other elements in the queue cannot be accessed directly unless they are dequeued.

    * No Random Access: Queues do not support random access of elements based on an index. To access elements, you need to dequeue them one by one until you reach the desired element.

    * Queue Overflow and Underflow: Queue overflow occurs when the queue is full, and an enqueue operation is attempted, resulting in an error. Queue underflow occurs when the queue is empty, and a dequeue operation is attempted, also resulting in an error.

+ Realworld Usecases:
    * Print Job Queue: In a printing system, print jobs are often processed in the order they are received. A queue data structure can be used to manage the print job queue, where each print job is added to the back of the queue and processed from the front. This ensures that print jobs are processed in the order they were submitted, maintaining a fair and organized printing system.

    * Customer Service Call Center: In a call center, incoming customer calls are typically handled on a first-come, first-served basis. A queue can be employed to manage the call queue, with each incoming call added to the back of the queue and processed from the front. This ensures that calls are handled in the order they were received, providing fair and efficient customer service.

    * Task Scheduling in Operating Systems: Operating systems often use queues to manage task scheduling. Different priority levels are assigned to tasks, and a queue is maintained for each priority level. Tasks with higher priority are executed first, while tasks with lower priority wait in their respective queues. This allows for efficient task scheduling and resource allocation in the operating system.

    * Message Queuing Systems: In distributed systems and messaging applications, message queues are commonly used to facilitate communication between components. Messages are added to the back of the queue and processed from the front by the receiving components. Message queues ensure reliable and ordered message delivery, decoupling the sender and receiver and enabling asynchronous communication.

    * Breadth-First Search (BFS) Algorithm: The BFS algorithm is widely used to explore or search graphs. It utilizes a queue to visit nodes in a graph level by level, starting from a given source node. The queue is used to store the neighboring nodes to be visited, ensuring that nodes are processed in the order they were discovered. BFS is employed in various applications, such as graph traversal, shortest path finding, and network analysis.

+ Big(O) Notation:
____________________________________________________________________________________________________________________
                            Time Complexity	                                                    |  Space Complexity
                Average	                        |                   Worst	                    |       Worst
Access	    Search	  Insertion   Deletion      |   Access	    Search	   Insertion  Deletion  |___________________ 
O(n)        O(n)	    O(1)	   O(1)         |    O(n)	     O(n)	    O(1)	    O(1)    |        O(n)
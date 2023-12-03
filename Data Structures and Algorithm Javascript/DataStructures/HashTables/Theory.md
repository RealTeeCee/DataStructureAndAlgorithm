# HashTables: 
+ What is HashTable?
    - A hash table is an unordered collection of key-value pairs, with a unique key for each value. In a hash table, data is stored in an array of list format, with a distinct index value for each data value. Hashtable is to use a hash function to convert the key into a numeric value known as a hash code. This hash code is then used as an index to determine the position in the array where the corresponding value is stored. By using a hash function, the hashtable achieves constant-time complexity.

+ Key characteristics: 
    * Hash Function: A hash function takes a key as input and produces a hash code, which is used to determine the index in the array where the value will be stored. The hash function should ideally distribute the hash codes uniformly across the array to minimize collisions.

    * Array and Buckets: The underlying data structure of a hashtable is typically an array of fixed or dynamically resizable size. Each element in the array is referred to as a bucket or slot and can hold a key-value pair or a reference to such a pair.

    * Collision Resolution: Collisions occur when two different keys produce the same hash code, resulting in conflicts for the same array index. Various collision resolution techniques, such as separate chaining or open addressing, are used to handle these collisions and store multiple key-value pairs in the same bucket.    

+ Realworld Usecases: 
    * Caching: Hashtables are commonly used in caching systems to store frequently accessed data. The hash function maps the data's key to a unique index in the hashtable, allowing for fast retrieval. Caching systems use hashtables to store recently accessed data, reducing the need to fetch it from the original source, which improves performance.

    * Databases: Hashtables play a crucial role in database systems, particularly in indexing and querying. Hash-based indexing structures, such as hash indexes or hash tables, are used to optimize searches and access data quickly. The hash function maps the search key to a specific location in the hashtable, allowing for efficient retrieval of data.

    * Language Processing: Hashtables are utilized in natural language processing tasks, such as spell checking or language modeling. They can be used to store dictionaries, word frequencies, or language models. The hashtable provides fast lookup and retrieval of information based on the keys, enabling efficient language processing algorithms.

    * Symbol Tables: Compilers and interpreters often use hashtables to implement symbol tables. Symbol tables store information about identifiers (variables, functions, etc.) in a program, including their names, data types, and memory addresses. Hashtables allow for efficient lookup and management of symbols during the compilation or interpretation process.

    * Network Routing: Hashtables are employed in network routing algorithms to store routing information. In routing tables, IP addresses or network prefixes are mapped to next-hop routers or forwarding information. By using a hashtable, routers can quickly determine the next hop for a given destination address, facilitating efficient packet forwarding.

+ Big(O) Notation:
____________________________________________________________________________________________________________________
                            Time Complexity	                                                    |  Space Complexity
                Average	                        |                   Worst	                    |       Worst
Access	    Search	  Insertion   Deletion      |   Access	    Search	   Insertion  Deletion  |___________________ 
N/A	        O(1)	    O(1)	   O(1)         |    N/A	     O(n)	    O(n)	    O(n)    |        O(n)
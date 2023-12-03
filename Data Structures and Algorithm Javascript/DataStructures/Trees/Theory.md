# Tree
+ What is Tree?
    - A tree is an abstract data type that stores elements hierarchically. With the exception of the top element, each element in a tree has a parent element and zero or more children elements.
    - The main terminology for tree data structure comes from family trees, with the terms "parent," "child'", "ancestor", and "decendant" being the most common words used to describe relationships.
    - Each element in a tree has a parent element and zero or more children elements.

+ Key Characteristics:
    * Hierarchical Structure: A tree is a hierarchical data structure composed of nodes connected by edges. It consists of a collection of nodes, where one node is designated as the root, and the remaining nodes are organized in a hierarchical manner as child nodes or descendants of the root.

    * Nodes and Edges: Each node in a tree holds a value or payload and can have zero or more child nodes connected to it by edges. The edges represent the relationships or connections between nodes.

    * Root: The root of a tree is the topmost node and serves as the starting point for traversing the tree. It has no parent and is the only node without an incoming edge.

    * Parent and Child: In a tree, each node (except the root) has exactly one parent node, which is the node directly above it. Nodes directly connected to a parent node are called child nodes.

    * Siblings: Nodes that share the same parent are called siblings. They are at the same level in the tree hierarchy.

    * Leaf Nodes: Leaf nodes, also known as terminal nodes, are nodes that have no children. They are the endpoints of the tree.

    * Depth and Height: The depth of a node is the number of edges from the root to that node. The height of a node is the number of edges on the longest path from that node to a leaf. The height of the tree is the height of the root node.

    * Balanced and Unbalanced Trees: A balanced tree is a tree in which the heights of the left and right subtrees of any node differ by at most one. Balanced trees, such as AVL trees and red-black trees, provide efficient operations and maintain a balanced structure. Unbalanced trees can have significant performance impacts due to skewed heights.

    * Tree Traversal: Tree traversal refers to visiting each node in a tree in a specific order. Common traversal techniques include depth-first traversal (pre-order, in-order, post-order) and breadth-first traversal (level-order).

+ Realworld Usecases:
    * File System Organization: File systems in operating systems often utilize a tree structure to organize files and directories. Each directory can be represented as a node in the tree, with child nodes representing subdirectories or files. Trees allow for efficient navigation and management of the file system hierarchy, enabling operations such as searching for files, creating directories, or moving files.

    * Organization Charts: Trees are commonly used to represent organizational hierarchies in companies or institutions. Each employee or position can be represented as a node in the tree, with child nodes representing subordinates. Trees provide a clear and structured representation of reporting relationships, allowing for easy visualization and analysis of the organization's structure.

    * HTML Document Object Model (DOM): The DOM represents the structure of an HTML document as a tree. Each HTML element is represented as a node, with child nodes representing nested elements. The tree structure of the DOM allows for efficient traversal and manipulation of HTML elements, enabling web developers to dynamically modify and interact with web pages.

    * Decision Trees: Decision trees are widely used in machine learning and data analysis. They represent a flowchart-like structure, where each node represents a decision or attribute, and each branch represents the outcome or possible value. Decision trees are used for tasks such as classification, regression, and data exploration, providing a clear and interpretable representation of decision-making processes.

    * Network Routing: Trees are utilized in network routing protocols, such as Spanning Tree Protocol (STP) and Open Shortest Path First (OSPF). These protocols construct tree-like structures to determine the most efficient paths for data transmission in computer networks. Trees facilitate the efficient routing of network traffic, ensuring reliable and optimal data delivery.
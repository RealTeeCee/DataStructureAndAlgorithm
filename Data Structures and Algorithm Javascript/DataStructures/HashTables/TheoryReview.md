# What is HashTable?
- HT is a collection of unordered key-value pairs with each key is unique. Store data in format of array list with distinct index. use a hash function to hash the key to numeric value known as hashcode then use the that hash to retrieve the key-value pairs from corresponding position.  

# Key Characteristic?
- Hash Function: Hash Function take key as input and provide hashcode for retrieve correct position of array where the value is stored. Hash function should distribute the return value for each key uniformly to minimize collisons.

- Array & Bucket: HT store data in format list of array. Each element of data is an array present as bucket which store key-value pair.

- Collison: Hashcode of key can have same value which cause a collison. This will impact to retrieving data of key-value pairs when access through same index

# Advantage & Disadvantage?
- Advantage: Fast lookup, Fast insert, Flexible key (Multiple type but need good resolution to collison)
- Disadvantage: Unordered, Slow key iteration

# Big(O) Notation?
Good case
access n/a
search O1
insert O1
delete 01

Worst case
access n/a
search On
insert On
delete 0n

Space
On

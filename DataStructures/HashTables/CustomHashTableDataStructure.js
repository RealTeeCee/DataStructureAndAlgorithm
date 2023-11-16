class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash; // O(1)
    }

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        console.log( this.data);
        // O(1)
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined; // O(1) 
    }

    keys(){
        const returnKeys = [];
        let buckets = [];
        for (let i = 0; i < this.data.length; i++) {           
            if(this.data[i]){
                buckets = this.data[i];
                for (let j = 0; j < buckets.length; j++) {
                    returnKeys.push(buckets[j][0]);
                }
            }
        }
        return returnKeys
    }

    keysV3() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }

    keysV2(){
        const returnKeys = [];
        for (let i = 0; i < this.data.length; i++) {           
            if(this.data[i]){
                returnKeys.push(this.data[i][0][0]);
            }
        }
        return returnKeys
    }

    
}

const myHashTable = new HashTable(50);


// console.log(myHashTable.data)
console.log(myHashTable.keys());
console.log(myHashTable.keysV3());
console.log(myHashTable.keysV2());
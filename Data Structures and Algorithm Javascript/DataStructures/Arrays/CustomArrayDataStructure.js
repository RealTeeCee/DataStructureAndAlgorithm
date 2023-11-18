export default class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    getDataByIndex(index){
        return this.data[index];
    }

    insertLastData(item){
        this.data[this.length] = item;
        this.length++;
    }
    //item->0;0->1; 1->2; 2->3
    // Lenght: 3
    // Index: 0 1 2
    // Item : 1 2 3
    
    // New array
    // Length : 4
    // index: 0 1 2 3
    // item:  1 2 3->3  
    // item:  1 2 3->3  
    insertFirstData(item){
        // return this.data = {item,...this.data};
        for (let i = this.length; i > 0; i--) {
           const element = this.data[i-1];
           this.data[i] = element
        }
        this.data[0] = item;
        this.length++;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    
    // Length : 3
    // index: 0  1  2  
    // item:  1  2  3  
    // item:  1  3<-3  

    delete(index){
        const item = this.data[index];

        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1];
            console.log(this.data);
        }
        delete this.data[this.length - 1];
        console.log(this.data);
        return this.data
    }    
}
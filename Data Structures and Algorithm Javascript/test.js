let obj1 = {
    value: 1,
    next: {
        value: 2,
        next : {
            value: 3,
            next : null
        }
    }
};

let obj2 = obj1;
console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
let temp = obj2;
temp=temp.next;
obj2.next = temp;
obj2 = obj2.next;
temp = obj2;
temp= temp.next;
obj2.next = temp;
obj2 = obj2.next;

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
let test = "";


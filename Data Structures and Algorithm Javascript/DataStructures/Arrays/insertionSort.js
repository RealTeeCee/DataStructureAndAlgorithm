const newArray = [1, 5, 0, 10 ,8, 7, 9, 6, 3, 4];

function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

insertionSort(newArray);

console.log(newArray);

const arr = [];
let cnt = 0

function insert(point, arr){
    
    let i = 0;
    if(cnt < 10){
        arr[cnt++] = point;
        for(i = cnt - 1; i > 0;){
            if(point < arr[i-1]){
                arr[i] = arr[i - 1];
                i--;
            }
            else{
                break;
            }
            arr[i] = point;
        }
    }else {
        if(point < arr[0]){
            return;   
        }
        for(i = 0; i <= cnt -1 ;){
            if(point > arr[i]){
                if(i === cnt - 1){
                    arr[i] = point
                    break;
                }else {
                    arr[i] = arr[i + 1];
                    i++;
                    continue;
                }
            } else{
                arr[i-1] = point;
                break;
            }
        }
    }

}
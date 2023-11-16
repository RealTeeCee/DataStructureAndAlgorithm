
// mergeSortArray([0,3,4,31],[4,6,30]) -> [0,3,4,4,6,30,31]

const arr1 = [0,3,4,31,40,41,42,43];
const arr2 = [4,6,30,43];

// function mergeSortArray(arr1, arr2) {
//     let newArr = []
//     let temp = 0;
//     let cnt = 0;
//     let cnt2 = 0;
//     for (let i = 0; i < arr1.length;i++) {
//         for ( let j = temp; j < arr2.length;) {
//             if(arr1[i] < arr2[j]){
//                 if(i === arr1.length - 1 ){
//                     if(cnt2 === 0){
//                         newArr.push(arr1[i])
//                         i--;
//                         cnt2++;
//                         break;
//                     }
//                     newArr.push(arr2[j])
//                     i--;
//                     temp++;
//                     break;
//                 }
                       
//                 newArr.push(arr1[i])   
//                 break;      
//             }else if(arr1[i] === arr2[j]) {
//                 newArr.push(arr1[i])
//                 newArr.push(arr2[j])
//                 temp++;
//                 break;
//             }else {
//                 if(temp === arr2.length - 1 ){
//                     if(arr2[j] < arr1[i]){
//                         if(cnt === 0){
//                             newArr.push(arr2[j])
//                             cnt++;
//                         }
//                         newArr.push(arr1[i])
//                         break;
//                     }else{
//                         newArr.push(arr1[i])
//                         temp++;
//                     }
//                 }
//                 newArr.push(arr2[j])
//                 temp++;
//                 i--;
//                 break;
//             }
//         }
//     }
//     return newArr;
// }

// console.log(mergeSortArray(arr1,arr2))

// function mergeSortedArrays(array1 = [], array2 = []) {
//     const mergeSortedArray = [];
//     let tempj = 0;
//     for (let i = 0; i < array1.length; i++) {
//       for (let j = tempj; j < array2.length; j++) {
//         if (array1[i] < array2[j]) {
//           mergeSortedArray.push(array1[i]);
//           if (i === array1.length - 1) {
//             for (let z = tempj; z < array2.length; z++) {
//               mergeSortedArray.push(array2[j]);
//               j++;
//             }
//           }
//           break;
//         } else if (array1[i] > array2[j]) {
//           mergeSortedArray.push(array2[j]);
//           tempj = j + 1;
//           if (tempj === array2.length) {
//             for (let z = i; z < array1.length; z++) {
//               mergeSortedArray.push(array1[i]);
//               i++;
//             }
           
//           } else {
//             i--;
//           }
  
//           break;
//         } else {
//           mergeSortedArray.push(array1[i]);
//           mergeSortedArray.push(array2[j]);
//           tempj = j + 1;
//           break;
//         }
//       }
//     }
//     return mergeSortedArray;
//   }
//   console.log(mergeSortedArrays(arr1,arr2));


  function mergeSortedArrays2(array1 = [], array2 = []) {
    const returnArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
  
    while (array1Item || array2Item) {
      if (array2Item === undefined || array1Item < array2Item) {
        returnArray.push(array1Item);
        array1Item = array1[i];
        i++;
      } else {
        returnArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
    }
    return returnArray;
}
console.log(mergeSortedArrays2(arr1, arr2));
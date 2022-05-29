//using call by referance
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [3,4,5,1,2,6,7,8,9];

function selectionSort(arr){
    for(let i = 0;i<=arr.length-1;i++){
        minIndex = arr[i];
        swapIndex = null;
        for(let j = i + 1;j<arr.length;j++){
            if(arr[j] < minIndex){
                minIndex = arr[j];
                swapIndex = j;
            }
        }
        if(swapIndex!==null){
            swap(arr,swapIndex,i);
        }
        
    }
    console.log(arr)
}
selectionSort(arr);

//normal implimentation

// let arr = [3,4,5,1,2,34];

// function selectionSort(arr){
//     for(let i = 0;i<=arr.length-1;i++){
//         minIndex = arr[i];
//         swapIndex = null;
//         for(let j = i + 1;j<arr.length;j++){
//             if(arr[j] < minIndex){
//                 minIndex = arr[j];
//                 swapIndex = j;
//             }
//         }
//         if(swapIndex !== null){
//             let temp = arr[swapIndex];
//             arr[swapIndex] = arr[i];
//             arr[i] = temp;
//         }
        
//     }
//     console.log(arr)
// }
// selectionSort(arr);
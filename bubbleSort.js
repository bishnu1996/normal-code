// function swap(arr,a,b){
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
const arr = [2,3,1,6,7,34,9,10,12,11,8];

function bubble(arr){
    for(let i = 1;i<arr.length;i++){
        for(let j = 0;j<arr.length-1;j++){
            if(arr[j]>arr[j + 1]){
                // swap(arr[j],arr[j+1]) //pass by referance
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr)
}
bubble(arr);
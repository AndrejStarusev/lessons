const prompt = require('prompt-sync')();

const arr = [1,2,6,5,4,8,10,3,22,21,100,99,101]

function sort1 (arr,order) {
    for(let j = 0;j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1;i++){
            if(order == '>' ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
                let swap = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = swap
            }
        }
    }
    return arr;
}
console.log(sort1(arr,'>'))



function sort2(arr,order) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        if(order == '>') {
            while (j > 0 && arr[j - 1] > current) {
                arr[j] = arr[j - 1];
                j--;
            }
        } else {
            while (j > 0 && arr[j - 1] < current) {
                arr[j] = arr[j - 1];
                j--;
            }
        }
        
        
        arr[j] = current;
    }
    return arr;
};
console.log(sort2(arr,'>'))
function checkMethod(sort1,sort2) {
    const arrASC = arr.sort();
    const arrDESC = arr.reverse();
    if(sort1,sort2(arr) == arrASC || sort1,sort2(arr,'<' == arrDESC)) {
        return true;
    } else{
        return false;
    }
}
console.log(checkMethod(sort1,sort2))

const prompt = require('prompt-sync')();

const arr = [6,9,1,4,2,3,7,5,8,10]

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
// console.log(sort1(arr,'<'))



function sort2(arr,order) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        if(order == '>') {
            while (j > 0 && arr[j - 1] > current) {
                arr[j] = arr[j - 1];
                j--;
            }
        } 
        else {
            while (j > 0 && arr[j - 1] < current) {
                arr[j] = arr[j - 1];
                j--;
            }
        }
        
        
        arr[j] = current;
    }
    return arr;
};
// console.log(sort2(arr,'>'))

function sort3(arr,order) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (order == '>' ? arr[indexMin] > arr[j] : arr[indexMin] < arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}
// console.log(sort3(arr,'>'))





function testAsc(sort) {
    const arrASC = [1,2,3,4,5,6,7,8,9,10]
    const ascRes = sort;
    // console.log(arrASC)
    console.log(ascRes)
    for(let i = 0;i < arr.length;i++) {
        if(ascRes[i] !== arrASC[i]) {
            console.log('sort1 doesn`t work')
            return false;
        }
    }
    return true;
}
console.log(testAsc(sort1(arr,'>')))

function testAsc(sort) {
    const arrDESC = [10,9,8,7,6,5,4,3,2,1]
    const descRes = sort;
    console.log(arrDESC)
    console.log(descRes)
    for(let i = 0;i < arr.length;i++) {
        if(descRes[i] !== arrDESC[i]) {
            console.log('sort1 doesn`t work')
            return false;
        }
    }
    return true;
}
console.log(testAsc(sort1(arr,'<')))


// function time(sort) {
// console.time(`${sort}`)
// sort(arr)
// console.timeEnd(`${sort}`)
// return sort;
// }
// console.log(time(sort1(arr)))
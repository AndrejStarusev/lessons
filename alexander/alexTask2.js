const prompt = require('prompt-sync')();
const arr = [1, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 81, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2,1, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2,1, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2];
const bigArr = [];
for (let i = 0; i < 2; i++) {
    bigArr.push(...arr);
};



function quicksort(array, value) {
    const index = Math.floor(Math.random() * array.length);
    const currentItem = array[index];
    const more = [];
    const less = [];

    if(array.length < 2) {
        return array
    }
    if (value === '1') {
        for (let i = 0; i < array.length; i++) {
            if (i === index) {
                continue
            }
            if (array[i] > currentItem) {
                more.push(array[i]);
            } else {
                less.push(array[i]);
            }
        }
    }else if(value === '2') {
        for (let i = 0; i < array.length; i++) {
            if (i === index) {
                continue
            }
            if (array[i] < currentItem) {
                more.push(array[i]);
            } else {
                less.push(array[i]);
            }
        }
    }
 
    return [...quicksort(less, value), currentItem, ...quicksort(more, value)]
    
}

function selectionSort(array, value) {
    const sortArr = array;
    if (value === '1') {
        for (let i = 0; i < sortArr.length - 1; i++) {
            let max = -Infinity;
            let index = NaN;
            for (let j = 0; j < sortArr.length - i; j++) {
                if (sortArr[j] > max) {
                    max = sortArr[j];
                    index = j;
                }
            }
            
            let buff = sortArr[sortArr.length - 1 - i];
            sortArr[sortArr.length - 1 - i] = max;
            sortArr[index] = buff;
        }

    }else if (value === '2') {
        for (let i = 0; i < sortArr.length - 1; i++) {
            let max = Infinity;
            let index = NaN;
            for (let j = 0; j < sortArr.length - i; j++) {
                if (sortArr[j] < max) {
                    max = sortArr[j];
                    index = j;
                }
            }
            
            let buff = sortArr[sortArr.length - 1 - i];
            sortArr[sortArr.length - 1 - i] = max;
            sortArr[index] = buff;
        }
    }
    return sortArr
}

function bubbleSort(array, value) {
    const sortArr = array;
    if (value === '1') {
        for ( let j = 0; j < sortArr.length; j++) {
            for (let i = 0; i < sortArr.length - 1; i++) {
                if ( sortArr[i] > sortArr[i + 1]) {
                    const buff = sortArr[i];
                    sortArr[i] = sortArr[i + 1];
                    sortArr[i + 1] = buff;
                }
            }
    
        }
    }else if (value === '2') {
        for ( let j = 0; j < sortArr.length; j++) {
            for (let i = 0; i < sortArr.length - 1; i++) {
                if ( sortArr[i] < sortArr[i + 1]) {
                    const buff = sortArr[i];
                    sortArr[i] = sortArr[i + 1];
                    sortArr[i + 1] = buff;
                }
            }
    
        }
    }

    return sortArr
}


function test(sort) {
    const arr = [1, 3, 2];
    const arrAsc = [1, 2, 3];
    const arrDesc = [3, 2, 1];
    
    const ascRes = sort([...arr], '1')  
    const descRes = sort([...arr], '2')
    
    for(let i = 0; i < arr.length; i++) {

        if (arrAsc[i] !== ascRes[i]) return false

    }

    for(let i = 0; i < arr.length; i++) {
        if (arrDesc[i] !== descRes[i]) return false

    }
    
    return true 
    


  }
const timeBeforQuick = Date.now();
const isValidQuick = test(quicksort);
console.log('Quick time : ',Date.now() - timeBeforQuick);

const timeBeforSelect = Date.now(); 
const isValidSelect = test(selectionSort);
console.log('select time : ', Date.now() - timeBeforSelect);

const timeBeforBubble = Date.now();   
const isValidBubble = test(bubbleSort);
console.log('bubble time : ',Date.now() - timeBeforBubble);


console.log('isValidQuick : ', isValidQuick)
console.log('isValidSelect : ', isValidSelect)
console.log('isValidBubble : ', isValidBubble)


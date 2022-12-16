const prompt = require('prompt-sync')();
const arr = [1, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 81, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2,1, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2,1, 10, 14, 5, 6, 12, 3, 2, 8, 20, 25, 30, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2, 8, 1, 10, 14, 5, 6, 12, 3, 2];
const bigArr = [];
let timeQuickSort;
let timeSelectionSort;
let timeBubbleSort;
for (let i = 0; i < 200; i++) {
    bigArr.push(...arr);
};


function sort () {
    let sortAscDesc = prompt('выберите вариант сортировки : 1)возрастание, 2)убывание ');
    if (sortAscDesc) {
        let date = Date.now();
        quicksort(bigArr, sortAscDesc)
        timeQuickSort = Date.now()- date;
        console.log('check sort quick', testSort(quicksort(bigArr, sortAscDesc), sortAscDesc))
        selectionSort(bigArr, sortAscDesc);
        bubbleSort(bigArr, sortAscDesc);
        console.log(`time Quick : ${timeQuickSort}`)
        console.log(`time selection : ${timeSelectionSort}`);
        console.log(`time bubble : ${timeBubbleSort}`);
    }
}

sort()

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
    timeSelectionSort = Date.now();
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
    timeSelectionSort = Date.now() - timeSelectionSort;
    console.log('check sort selection', testSort(sortArr, value))
    return sortArr
}

function bubbleSort(array, value) {
    timeBubbleSort = Date.now();
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
    timeBubbleSort = Date.now() - timeBubbleSort;
    console.log('check sort bubble', testSort(sortArr, value))
    return sortArr
}

function testSort (array, type) {
    let ASC = bigArr.sort();
    let DESC = ASC.reverse();
    if(type === '1') {
        for(let i = 0; i < array.length; i++) {
            if (ASC[i] === array[i]) {
                return true
            }else {
                return false
            }
            
        }
    }else if (type === '2') {
        for(let i = 0; i < array.length; i++) {
            if (DESC[i] === array[i]) {
                return true
            }else {
                return false
            }
            
        }
    }


}

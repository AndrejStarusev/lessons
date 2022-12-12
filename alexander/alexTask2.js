const prompt = require('prompt-sync')();
const arr = [1, 10, 14, 5, 6, 12, 3, 2, 8];


// function sort () {
//     while(value !== false) {
//         let value = prompt('введите значения для массива ');
//         if(value === broken) {
//             arr.push(value)
//         }
//     }
//     let sortAscDesc = prompt('выберите вариант сортировки : 1)возрастание, 2)убывание ')
// }

// sort()

function quicksort(array) {
    const index = Math.floor(Math.random() * array.length);
    const currentItem = array[index];
    const more = [];
    const less = [];

    if(array.length < 2) {
        return array
    }

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

    return [...quicksort(less), currentItem, ...quicksort(more)]

}

function selectionSort(array) {
    const sortArr = array;
    console.log(sortArr)
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
    return sortArr
}

function bubbleSort(array) {
    const sortArr = array;
    for ( let j = 0; j < sortArr.length; j++) {
        for (let i = 0; i < sortArr.length - 1; i++) {
            if ( sortArr[i] > sortArr[i + 1]) {
                const buff = sortArr[i];
                sortArr[i] = sortArr[i + 1];
                sortArr[i + 1] = buff;
            }
        }

    }
    return sortArr
}
console.log(bubbleSort(arr));
// console.log(quicksort(arr));
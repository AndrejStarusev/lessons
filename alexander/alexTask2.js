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

console.log(quicksort(arr));
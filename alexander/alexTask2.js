const prompt = require('prompt-sync')();
const broken = '0';
const arr = [];


function sort () {
    while(value !== false) {
        let value = prompt('введите значения для массива ');
        if(value === broken) {
            arr.push(value)
        }
    }
    let sortAscDesc = prompt('выберите вариант сортировки : 1)возрастание, 2)убывание ')
}

sort()
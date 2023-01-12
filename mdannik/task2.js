const prompt = require("prompt-sync")();

 function makeObject() {
     const obj = {
         name:  prompt('What is your name? '),
         surname: prompt('What is your surname? '),
         age: prompt('What is your age?'),
         gender: prompt('What is your gender?' ),
         index: 1
     };
     return obj;
 }

 function writeIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].index = i + 1;
    }
    return arr;
 }

function printObj(obj) {
    for (key in obj) {
        console.log(`${key} - ${obj[key]}`);
    }
}

function searchValue(numbers) {
    let answer =  +prompt('Write one of next number : 1 - name, 2 - surname, 3 - age, 4 - gender?' );
    let value = prompt('Write value ');

    switch(answer) {
        case 1:{
            for (let i = 0; i < numbers.length; i++) 
                if (numbers[i].name == value) 
                    printObj(numbers[numbers[i].index-1]);
           break;
        }
        case 2: {
            for (let i = 0; i < numbers.length; i++)     
                if (numbers[i].surname == value)
                    printObj(numbers[numbers[i].index -1]);
           break;
        }
        case 3: {
            for (let i = 0; i < numbers.length; i++)       
                if (numbers[i].age == value)
                    printObj(numbers[numbers[i].index -1]);
           break;
        }
        case 4: {
            for (let i = 0; i < numbers.length; i++)    
                if (numbers[i].gender == value)
                    printObj(numbers[numbers[i].index -1]);
           break;
        }
    }
}

function find_value(obj, value) {
    for (key in obj) {
        if(key == value) {
            return 200;
        }
    }
    return 1;
}

function quickSort(new_str, wich_sort, num_value) {
for (let o = 0; o < new_str.length; o++) {
    for (let i = 0; i < new_str.length; i++) {

        for (key in new_str[i]) {
            if (num_value == key) {
                let copy_key = new_str[i][key];

                for (key in new_str[i+1]) {
                    if (num_value == key) {
                        if (copy_key > new_str[i+1][key] && wich_sort === 'ASC') {

                            let str = new_str[i];
                            new_str[i] = new_str[i + 1];
                            new_str[i + 1] = str;
                        }
                        if (copy_key < new_str[i+1][key] && wich_sort === 'DESC') {
                            let str = new_str[i];
                            new_str[i] = new_str[i + 1];
                            new_str[i + 1] = str;
                        }
                    
                    }
                }
            }
        }           
    } 
}
    let copy = [];

    new_str.forEach((item, index) => {
        copy[index] = item;
 
    })
    return copy;
}

 function createUsers() {
    const numbers = [];

    while(true) {
        const  answer = prompt("1: Create new user   2: Update Existing  3: Delete user 4: Search users  5: Sort arrays (ASC/DESC) 6: Display info about all users in console  0: Stop application  ");

        switch(answer) {
            case '1':{
                numbers.push(makeObject());
                break;
            }
            case '2': {
                console.log(numbers);

                const indexUser = prompt('Write please index of user number?');

                if (indexUser <= numbers.length && indexUser > -1)
                   numbers[indexUser - 1] = makeObject();
                else 
                    console.log('Incorect index')
                break;
            }
            case '3': {
                console.log(numbers);

                const delUser = prompt('Write please index user to delate?');

                if (delUser <= numbers.length && delUser > -1)
                   numbers.splice(delUser - 1,delUser - 1);
                else 
                    console.log('Incorect index number')
                break;
            }
            case '4': {
                searchValue(numbers);
                break;
            }
            case '5': {
                if (numbers.length > 0) {

                    let value = prompt('write sort value');
                    let check_value = find_value(numbers[0], value);

                    if (+check_value === 200) {
                        quickSort(numbers,prompt('Chose ASC or DESC sort'), value);
                    }
                    else 
                        console.log('Incorect');
                }
                break;
            }
            case '6': {
                console.log(numbers);
                break;
            }
            case '0': {
                return;
            }
        }
        writeIndex(numbers);
    }
}

createUsers();
    
    
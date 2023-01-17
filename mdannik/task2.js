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

function searchValue(obj) {
    let value = prompt('Write value ');
    let key = prompt('Write key ');

    for (let i = 0; i < obj.length; i++)  {
        if (obj[i][key] == value) {
            printObj(obj[obj[i].index-1]);
        }
    }
}

function find_value(obj, key) {
    return obj[key];
}

function quickSort(obj, wich_sort, key) {
for (let o = 0; o < obj.length; o++) {
    for (let i = 0; i < obj.length - 1; i++) {
        let str = [];

        obj[i][key] > obj[i+1][key] && wich_sort === 'ASC' ? (
            str = obj[i],
            obj[i] = obj[i + 1],
            obj[i + 1] = str
        
        ): (
            str = obj[i],
            obj[i] = obj[i + 1],
            obj[i + 1] = str
        );
    }
}
    return obj;
}

 function createUsers() {
    const obj = [];

    while(true) {
        const  answer = prompt("1: Create new user   2: Update Existing  3: Delete user 4: Search users  5: Sort arrays (ASC/DESC) 6: Display info about all users in console  0: Stop application  ");

        switch(answer) {
            case '1':{
                obj.push(makeObject());
                break;
            }
            case '2': {
                console.log(obj);

                const indexUser = prompt('Write please index of user number?');

                if (indexUser <= obj.length && indexUser > -1)
                   obj[indexUser - 1] = makeObject();
                else 
                    console.log('Incorect index')
                break;
            }
            case '3': {
                console.log(obj);
                const delUser = prompt('Write please index user to delate?');

                if (delUser <= obj.length && delUser > -1)
                   obj.splice(delUser - 1,delUser - 1);
                else 
                    console.log('Incorect index number')
                break;
            }
            case '4': {
                searchValue(obj);
                break;
            }
            case '5': {
                if (obj.length > 0) {
                    let key = prompt('write sort value');

                    if (find_value(obj[0], key)) {
                        quickSort(obj,prompt('Chose ASC or DESC sort'), key);
                    }
                    else 
                        console.log('Incorect');
                }
                break;
            }
            case '6': {
                console.log(obj);
                break;
            }
            case '0': {
                return;
            }
        }
        writeIndex(obj);
    }
}

createUsers();
    
    
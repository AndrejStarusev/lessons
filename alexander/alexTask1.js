const prompt = require('prompt-sync')();
let command;
let update;
let indexUser;
let breakKey = '0';
const users = [];

function CreateUser() {
    return {    
        name: prompt('Name '),
        surname: prompt('surname '),
        age: prompt('age '),
        gender: prompt('gender '),
    };
}

function updateUsers(index) {
    while (update !== breakKey) {
        update = prompt('введите значение которое хотите изменить, 0 закончить операцию ');
        if (update !== breakKey) {
            const user = users[index];
            const value = prompt('введите значение ');
            user[update] = value;
        }
        
        // switch(update) {
        //     case 'name' : 
        //         user.name = value;
        //     break;
        //     case 'surname' :
        //         user.surname = value;
        //     break;
        //     case 'age' :
        //         user.age = value;
        //     break;
        //     case 'gender' :
        //         user.gender = value;
        //     break;
    
        //     default : update = false;
        // }
    }

}



while (command !== false) {
    command = prompt('Выберите операцию от 1 до 6, 0 закончить операции ');
    switch(command) {
        case '1' : 
            const user = CreateUser();
            users.push(user);
        break;
        case '2' :
            indexUser = prompt('Введите индекс юзера ');
            updateUsers(indexUser)
        break;
        case '3' :
            indexUser = prompt('Введите индекс юзера ');
            users.splice(indexUser, 1)
        break;

        default : command = false;
    }
}
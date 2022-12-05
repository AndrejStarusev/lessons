const prompt = require('prompt-sync')();
let command;
let update;
let indexUser;
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
    while (update !== false) {
        update = prompt('введите значение которое хотите изменить, 0 закончить операцию ');
        const user = users[index];
        let value = prompt('введите значение ');
        switch(update) {
            case 'name' : 
                user.name = value;
            break;
            case 'surname' :
                user.surname = value;
            break;
            case 'age' :
                user.age = value;
            break;
            case 'gender' :
                user.gender = value;
            break;
    
            default : update = false;
        }
    }

}



while (command !== false) {
    command = prompt('Выберите операцию от 1 до 6, 0 закончить операции ');
    switch(command) {
        case '1' : 
            const user = CreateUser();
            console.log(user);
            users.push(user);
        break;
        case '2' :
            indexUser = prompt('Введите индекс юзера ');
            updateUsers(indexUser)
            console.log(users)
        break;
        case '3' :
            indexUser = prompt('Введите индекс юзера ');
            users.splice(indexUser, 1)
            console.log(users);
        break;

        default : command = false;
    }
}
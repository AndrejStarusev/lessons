const prompt = require('prompt-sync')();
let command;
let update;
let indexUser;
let specificProperty;
let arrFindUsers;
const breakKey = '0';

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

function searchUsers(value) {
    const search = prompt(`введите ${value} `);
    arrFindUsers = users.filter(user => 
        user[value] === search
    );
    return arrFindUsers
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
        case '4' :
            specificProperty = prompt('Введите выбор поиска юзера(name, surname, age, gender) ');
            searchUsers(specificProperty);
            console.log(arrFindUsers);
        break;

        default : command = false;
    }
}
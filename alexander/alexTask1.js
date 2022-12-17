const prompt = require('prompt-sync')();
let command;

function CreateUser() {
    return {    
        name: prompt('Name '),
        surname: prompt('surname '),
        age: prompt('age '),
        gender: prompt('gender '),
    };
}

const users = [];

while (command !== false) {
    command = prompt('Выберите операцию от 0 до 6 ');
    switch(command) {
        case '1' : 
            const user = CreateUser();
            console.log(user);
            users.push(user);
        break;

        default : command = false;
    }
}
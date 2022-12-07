const prompt = require('prompt-sync')();
let command;
let update;
let indexUser;
let specificProperty;
let arrFindUsers;
let sort;
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

function sortAscUsers (sort, ascOrDesc) {
    console.log(ascOrDesc)
    if (ascOrDesc === '1') {
        for (let i = 0; i < users.length - 1; i++) {
            if ( users[i][sort] > users[i + 1][sort]) {
                const buff = users[i];
                users[i] = users[i + 1];
                users[i + 1] = buff;
            }
        }
    }else{
        for (let i = 0; i < users.length - 1; i++) {
            if ( users[i][sort] < users[i + 1][sort]) {
                const buff = users[i];
                users[i] = users[i + 1];
                users[i + 1] = buff;
            }
        }

    }
}


while (command !== false) {
    command = prompt('Выберите операцию: 1)Создать юзера, 2)Редактировать, 3)Удалить, 4)Поиск, 5)Сортировка, 6)Вывести всех юзеров, 0)закончить ');
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
        case '5' :
            sort = prompt('Введите значения сартировки(name, surname, age, gender) ');
            let ascOrDesc = prompt('выберите варианты сартировки: 1)возрастание, 2) убывание ');
            sortAscUsers(sort, ascOrDesc);
            console.log(users)
        break;
        case '6' :
            console.log(users)
        break;

        default : command = false;
    }
}
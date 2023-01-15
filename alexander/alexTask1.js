const prompt = require('prompt-sync')();
let command;
let arrFindUsers;
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
    const breakKey = '0';
    let update;
    while (update !== breakKey) {
        update = prompt('введите значение которое хотите изменить, 0 закончить операцию ');
        if (update !== breakKey) {
            const user = users[index];
            const value = prompt('введите значение ');
            user[update] = value;
        }
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
            let specificProperty;
            specificProperty = prompt('Введите выбор поиска юзера(name, surname, age, gender) ');
            searchUsers(specificProperty);
            console.table(arrFindUsers);
        break;
        case '5' :
            let sort;
            sort = prompt('Введите значения сартировки(name, surname, age, gender) ');
            let ascOrDesc = prompt('выберите варианты сартировки: 1)убывание, 2)возрастание ');
            sortAscUsers(sort, ascOrDesc);
            console.table(users)
        break;
        case '6' :
            console.table(users)
        break;

        default : command = false;
    }
}
let base = []
let user = {}
let command = 0;
while(true) {

    command = +prompt("1:Создать юзера 2:Обновить юзера 3:Удалить юзера 4:Найти юзера 6:Вывести все данные ")

    switch (command){
        case 1:

            createUser();
        break;
        case 2:

            resetUser()
        break;
        case 3:

            deleteUser()
        break;
        case 4:
            searchUser()
        break;
        case 6:
            console.log(base)
        break;        
    }

    let value = command
    if(value > 4) {
        console.log('Такой команды не существует')
    }
    if(value == ' ' || value <= 0) break;
}   


function createUser () {
    let userName = prompt('Введите ник ')
    let userAge = prompt('Введите возраст ')
    user = {
        name: userName,
        age: userAge,
        id: base.length
    }
    base.push(user)
    console.log(user)
}

function resetUser () {
    let key = prompt('Введите айди юзера которого хотите изменить: ')
    for(key in user) {
        user.name = prompt('Введите новое имя: ')
        user.age = prompt('Введите новый возраст: ')
        break;
    }
    // console.log(base)
}
function deleteUser() {
    let i = +prompt('Введите айди юзера которого хотите удалить: ')
    let remove = base.splice(i,1)
    console.log(base)
}
// function searchUser() {
//     let info = prompt('Введите дaнныe юзера: ')
//     for(info in user) {
//         console.log(user)
//         break;
//     }
// }
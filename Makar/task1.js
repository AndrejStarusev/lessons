const prompt = require('prompt-sync')();
let base = []
function makeUser(name,surname,age,gender,index) {
    return {
        name:name,
        surname:surname,
        age:age,
        gender:gender,
        index:index,
    }
}
let user = {}
while(true) {

    command = +prompt("1:Создать юзера 2:Обновить юзера 3:Удалить юзера 4:Найти юзера 5:Отсортировать всех юзеров 6:Вывести все данные ")

    switch (command){
        case 1:
            
            createUser();
        break;
        case 2:

            resetUser()
        break;
        case 3:

            // deleteUser()
        break;
        case 4:
            searchUser()
        break;
        case 6:
            console.log(base)
        break;        
    }

    if(command > 6) {
        console.log('Такой команды не существует')
    }
    if(command <= 0) break;
}   
function createUser() {
    let userName = prompt('имя: ')
    let userSurname = prompt('фамилия: ')
    let userAge = +prompt('возраст: ')
    let userGender = prompt('гендер: ')
    let userIndex = base.length;
    user = makeUser(userName,userSurname,userAge,userGender,userIndex)
    base.push(user)
}
function resetUser() {
    console.log(base)
    let index =  +prompt()
    let changes = prompt()
    let newValue = prompt()
    base[index][changes] = newValue
}


function searchUser() {
    let key = prompt('По каким критериям поиск ')
    let value = prompt('')
    const find = base.filter(person => person[key]  == value)
    console.log(find)
} 
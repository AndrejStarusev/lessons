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
    if(value > 6) {
        console.log('Такой команды не существует')
    }
    if(value <= 0) break;
}   
function createUser() {
    let userName = prompt('имя: ')
    let userSurname = prompt('фамилия: ')
    let userAge = +prompt('возраст: ')
    let userGender = prompt('гендер: ')
    let userIndex = base.length;
    let user = makeUser(userName,userSurname,userAge,userGender,userIndex)
    base.push(user)
}
function resetUser() {
    console.log(base)
    let criterion = +prompt()
    for(let i = 0;i < base.length;i++) {
        console.log(i)
        if(i == criterion) {
            let value = prompt()
            base[i] = value 
        }
        
    }
}
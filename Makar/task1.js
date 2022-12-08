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
        case 5:
            console.log(sortUsers(base,'>'))
        break;
        case 6:
            base.forEach(person => console.log(person))
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
function sortUsers(base1,order){
    let property = prompt()
    for(let j = 0;j < base1.length; j++) {
        for (let i = 0; i < base1.length - 1;i++){
            if(order == '>' ? base1[i][property] > base1[i + 1][property] : base1[i][property] < base1[i + 1][property]) {
                let swap = base1[i]
                base1[i] = base1[i + 1]
                base1[i + 1] = swap
                let changeIndex = base1[i].index
                base1[i].index = base1[i + 1].index
                base1[i + 1].index = changeIndex
            }
        }
    }
    return base1;
}

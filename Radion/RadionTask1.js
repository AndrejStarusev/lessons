const prompt = require("prompt-sync")();
//  let operation;
//  let indexUser;
//  let sortBy;
//  let update;
//  const breakButton ='q';
//  const users = [];

 
//  function NewUser() {
//     return{
//         name: prompt("name "),
//         surname: prompt("surname "),
//         age: prompt("age "),
//         gender: prompt("gender "),
//     };
//  }

//  function updateUser(index){
//     while (update !== breakButton) {
//         update = prompt('what needs to be changed? (name, surname, age, gender) press "q" to exit ');
//         if(update !== breakButton){
//             const user = users[index];
//             const value = prompt('put value ');
//             user[update] = value;
//         }
//      }
//  }

//  function searchUser(){
//    const search = prompt('what are we searching for? (by: name, surname, age, gender)  ');
//     const value = prompt("Put value ")
//     let searchUser = users.find(item => item[search] === value);
//     console.log(searchUser);
// }

//  function byField(field
//     ) {
//         metodSort = prompt("choise metod sort (1 - ASC; 2 - DESC) ");
//         switch(metodSort){
//             case '1' :
//             return (a, b) => a[field] > b[field] ? 1 : -1;
//             case '2' : 
//             return (a, b) => a[field] > b[field] ? -1 : 1;     
//         }
//        }





//  while(operation !== '0' ) {
//     operation = prompt("choise operation ")
//     switch(operation) {
//         case '1' :
//             // create new user
//             const user = NewUser();
//             console.log(user);
//             users.push(user);
          
//         break;
//         case '2' :
//             // update information about user
//             indexUser = prompt("put index user ");
//             updateUser(indexUser)
//         break;
//         case '3' :
//             // delete user by index
//             indexUser = prompt("enter the index of the user to be deleted ");
//             users.splice(indexUser, 1)
//         break;
//         case '4' :
//             // search user
//             searchUser()
//         break;
//         case '5' :
//             // sort users
//             sortBy = prompt("by what will we sort?(name,surname,age,gender) ");
//             users.sort(byField(sortBy));
//         break;
//         case '6' :
//             console.table(users);
//         break;
//         default : operation = '0';

//     }

//  }

let arr = [1,2,3,4,5];
function positiveSum(arr) {
  for(let i = 0; i < arr.lenght; i++){
    let sum
    if(i>=0){
      sum = arr[i] + arr[i+1];
    }
}
return sum
}
positiveSum();
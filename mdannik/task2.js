const prompt = require("prompt-sync")();
let index = 0;

 function makeObject(name, surname, age, gender, index) {
     const obj = {
         name: name,
         surname: surname,
         age: age,
         gender: gender,
         index: index
     };

     return obj;
 }
    const numbers = [];

    while(true) {
        const  answer = +prompt("1: Create new use.   2: Update Existing.  3: Delete user. 4: Search users.  5: Sort arrays (ASC/DESC). 6: Display info about all users in console.  0: Stop application");

        if (answer < 0 || answer  > 6) {
        console.log('Sorry write again');
}
        switch(answer) {
            case 1:{
                const name = prompt('What is your name?');
                const surname = prompt('What is your surname?');
                const age = prompt('What is your age?');
                const gender = prompt('What is your gender?');
                const num_index = index + 1;
                index++;

                numbers.push(makeObject(name,surname,age,gender, num_index));
                console.log(numbers);
                break;
            }
            case 2: {
                
                break;
            }
            case 6: {
                return;
            }
        }
    }
    
    
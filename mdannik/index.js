const prompt = require('prompt-sync')();
/*
try {
    const taskNumber = prompt('waht is your task number? ');
    require(`./task${taskNumber}`);
} catch(err) {
    console.log('We didn\'t find a task with this number.', err);
}
*/


function makeObject() {
    const obj = {
        name:  prompt('What is your name?'),
        surname: prompt('What is your surname?'),
        age: prompt('What is your age?'),
        gender: prompt('What is your gender?'),
        index: 1
    };
    return obj;
}

function printObj(obj, value) {
    let find_our_valu = 0;
    let count = 0;

    for (key in obj) {
        ++count;
        if(key == value) {
            console.log('Yep');
            find_our_valu  = count;
            console.log(find_our_valu);

            break;
        }
    }
    //return find_our_valu;
}




let obj = makeObject();
let value = printObj(obj, prompt('Write specific... '));

//console.log(obj[value]);
console.log(obj);



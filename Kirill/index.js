var prompt = require('prompt-sync')();

const taskNumber = prompt('waht is your task number? ');

try {
    require(`./task${taskNumber}`);
} catch(err) {
    console.log('We didn\'t find a task with this number.');
}
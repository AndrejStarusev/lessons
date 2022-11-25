const prompt = require('prompt-sync')();

try {
    const taskNumber = prompt('waht is your task number? ');
    require(`./task${taskNumber}`);
} catch(err) {
    console.log('We didn\'t find a task with this number.', err);
}
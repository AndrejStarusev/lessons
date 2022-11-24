var prompt = require('prompt-sync')();

const userName = prompt('waht is your user name? ');

try {
    require(`./${userName}`);
} catch(err) {
    console.log('We didn\'t find a user with this name.');
}
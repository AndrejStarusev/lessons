const prompt = require('prompt-sync')();

try {
    const userName = prompt('waht is your user name? ');
    require(`./${userName}`);
} catch(err) {
    console.log('We didn\'t find a user with this name.', err);
}
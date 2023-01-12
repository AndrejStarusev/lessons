require('dotenv').config();

try {
    require(`./${process.env.ACTIVE_FOLDER}/${process.env.ACTIVE_TASK_FILE_NAME}`);
} catch(err) {
    console.log('We didn\'t find a user with this name.', err);
}
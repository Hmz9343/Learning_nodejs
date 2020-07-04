require('../src/db/mongoose');
const Task = require('../src/db/model/task');

Task.findByIdAndDelete('5eabea0afafbb34d5ccaebcd').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
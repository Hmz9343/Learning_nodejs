require('../src/db/mongoose')
const Task = require('../src/db/model/task')

const updateAgeAndCount = async() => {
    const task = await Task.findByIdAndUpdate('5ea68210390b872354a6af7f', { completed: true });
    console.log(task);
    const count = await Task.countDocuments({ completed: false });
    console.log(count)
    return count;
};

updateAgeAndCount().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("Error");
})
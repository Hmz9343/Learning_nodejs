const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        require: true,
        default: false
    }
});

module.exports = Task;
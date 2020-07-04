const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('Users2', {
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email!!");
            }
        }
    },
    Age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0)
                throw new Error('Age must be positive.')
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password'))
                throw new Error("password cant contain 'password'");
        }
    }
});

module.exports = User
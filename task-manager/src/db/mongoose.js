const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validator(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String, 
        required: true,
        minlength: 7,
        trim: true,
        validator(value){
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: '    Adan',
    email: 'MYEMAIL@MEAD.IO'
})

me.save().then(() => {
    console.log(me)
}).catch((e) => {
    console.log('Error', e)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     }, 
//     completed: {
//         type: Boolean
//     }
// })

// const newTask = new Task({
//     description: 'Work on project',
//     completed: true 
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((e) => {
//     console.log('Error', e)
// })


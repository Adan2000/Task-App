const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value){
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: 'Mike',
    age: -1
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


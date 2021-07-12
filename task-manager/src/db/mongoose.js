const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


const Task = mongoose.model('Task', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

const newTask = new Task({
    description: 'Work on project',
    completed: true 
})

const me = new User({
    name: 'Adan',
    age: '21'
})


me.save().then(() => {
    console.log(me)
}).catch((e) => {
    console.log('Error', e)
})

//will be coming back
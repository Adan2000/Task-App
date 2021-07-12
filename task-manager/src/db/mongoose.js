const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
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

newTask.save().then(() => {
    console.log(newTask)
}).catch((e) => {
    console.log('Error', e)
})


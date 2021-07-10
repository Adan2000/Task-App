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
//here we define model and its properties in objects

const me = new User({
    name: 'Adan',
    age: '21'
})
//we then make a new consant with the following name and age in a object

me.save().then(() => {
    console.log(me)
}).catch((e) => {
    console.log('Error', e)
})
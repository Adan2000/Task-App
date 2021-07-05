// CRUD 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID, } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({

    //     name: 'Isaac',
    //     age: 21
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('Users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 23
    //     }, {
    //         name: 'Oscar',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert docs')
    //     } 
    //     console.log(result.ops)
    // })
//     db.collection('Tasks').insertMany([
//         {
//             description: 'Clean the house',
//             completed: true
//         }, {
//             description: 'Renew inspection',
//             completed: false
//         }, {
//             description: 'Commit',
//             completed: false
//         }
//     ], (error, result) => {
//         if(error) {
//             return console.log('unable to insert task')
//         } console.log(result.ops)
//     })

})

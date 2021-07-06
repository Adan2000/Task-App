// CRUD 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID, } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    db.collection('Users').findOne({ _id: new ObjectID('60dfeddb9911602cc1418867')}, (error, user) => {
        if (error) {
            return console.log('Unable to find user')
        } 
        console.log(user)
    })

})

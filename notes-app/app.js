const chalk = require('chalk')
const func = require('./notes.js')
const yargs = require('yargs')
const { describe } = require('yargs')

//customize yarg version

yargs.version('1.1.0')

// add, remove, read, list

//Create add command.
yargs.command({
    command: 'add', 
    describe: 'Add an new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})
//Create a list command 
yargs.command ({
    command: 'list',
    describe: 'List a note', 
    handler: function () {
        console.log('Listing out all notes')
    }
})
//Create a read command
yargs.command ({
    command: 'read',
    describe: 'Read a note', 
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()





// const message = func()
// console.log(message)

// const blueMsg = chalk.bold.inverse.blue('Success!')
// console.log(blueMsg)


// console.log(process.argv[2])

// const command = process.argv


// if (command === 'add') {
//     console.log('adding note!')
// } else if (command === 'remove') {
//     console.log('removing note!')
// }
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//the yargs.commmand for the add, will take in a title and a body. 
//demandOption was set to true that way it is required to type in --title or --body
//the type was set to string to take in strings 
//Last we call in the addNote that comes from the notes constant. 
//We pass it in the title and body

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
       notes.removeNote(argv.title)
    }
})

//Create a list command 
yargs.command ({
    command: 'list',
    describe: 'List a note', 
    handler() {
        notes.listNotes()
    }
})

//Create a read command
yargs.command ({
    command: 'read',
    describe: 'Read a note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()


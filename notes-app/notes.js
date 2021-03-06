const fs = require('fs')
const chalk = require('chalk')



const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    //console.log(duplicateNotes)
    //use console.log to find out what things equal to if 
    //they have any value. For debugging

    //debugger
    //we can add debugger one time and run node inspect app.js 

    //we can look at the error message as well where it says "ReferenceError"
    //that will show WHAT the error is. 
    //Down below it it will show WHERE the errror is. 
      
    if (!duplicateNote) {
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}


//HELPERS 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    //try catch method, if any code inside of try fails it will stop and run the catch block and in our case 
    //return a empty array.
    //We use the readFileSync to get data from the notes.json file 
    //We then turn that file into a string 
    //We then turn it into a object. Otherwise we return an empty array.
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
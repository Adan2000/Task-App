const fs = require('fs')


const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    notes.push({
        title: title, 
        body: body
    })

    saveNotes(notes)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    //try catch method, if any code inside of try fails it
    //will stop and run the catch block and in our case 
    //return a empty array
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
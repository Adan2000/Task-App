const fs = require('fs')
// const book = {
//     title: 'Ego',
//     author: 'Ryan'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

//JSON stringify converts a object into a string. 


//const parseData = JSON.parse(bookJSON)
//JSON parse converts a string into a object, that way you can access the keys. 


//Read the file in and getting in our binary data 
const dataBuffer = fs.readFileSync('1-json.json')
//Turned that data into a string 
const dataJSON = dataBuffer.toString()
//Turned that data into a json object
const data = JSON.parse(dataJSON)
//we acessed the title of that data object
console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const parseData = JSON.parse(dataBuffer)

parseData.age = 21
parseData.name = 'Adan'

const stringData = JSON.stringify(parseData)
fs.writeFileSync('1-json.json', stringData)

//CONNECT THIS TO GIT TO KEEP COMMITING
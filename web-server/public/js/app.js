console.log('Client side')

fetch('http://puzzle.mead.io/puzzle')
    .then((response) => {
        response.json().then((data) =>{
            console.log(data)
        })
})

const url = 'http://localhost:3000/weather?address=boston'

fetch(url)
    .then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })

//Fetch JSON data from a URL.
//Parse it into a JS object.
//Console log that data
console.log('Client side')

fetch('http://puzzle.mead.io/puzzle')
    .then((response) => {
        response.json().then((data) =>{
            console.log(data)
        })
})

//Fetch JSON data from a URL.
//Parse it into a JS object.
//Console log that data
const  express = require('express')

const app = express()

//HTML
app.get('', (req, res ) => {
    res.send('<h1>Weather<h/h1>')
})
//JSON
app.get('/help', (req, res) => {
    res.send([{
        name: 'Adan'
    },
    {
        name: 'Sarah'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'It is raining',
        location: 'Seattle'
    })
})

// app.com 
// app.com/help
// app.com/about
// app.com/weather

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

//nodeman src/app.js 
//Listens to changes
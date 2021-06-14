const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config. 
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location.
app.set('view engine', 'hbs')
app.set('views', viewPath)

// Setup static directory to serve.
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Adan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Adan'

    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'This is some helpful text.'
    })
})

//handle bars used for dynamic.

app.get("/weather", (req, res) => {
  res.send({
    forcast: "It is raining",
    location: "Seattle",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

//nodemon src/app.js
//Listens to changes
// CMD -> SHIFT -> P (Format file)
const path = require("path");
const express = require("express");
const hbs = require('hbs')

const app = express();

// Define paths for Express config. 
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const footerPartial = path.join(__dirname, '../template/partials')

// Setup handlebars engine and views location.
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath) //partials can be and are used in multiple pages.


// Setup static directory to serve.
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', { 
        title: 'Weather',
        name: 'Adan Escamilla'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Adan Escamilla'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'This is some helpful text.',
        title: 'Help',
        name: 'Adan Escamilla'
    })
})

//handle bars used for dynamic.

app.get("/weather", (req, res) => {
  res.send({
    forcast: "It is raining",
    location: "Seattle",
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Adan', 
    errorMessage: 'Help article not found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Adan Escamilla',
    errorMessage: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

//nodemon src/app.js
//Listens to changes
// CMD -> SHIFT -> P (Format file)
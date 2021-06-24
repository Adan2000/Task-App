const path = require("path");
const express = require("express");
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        helptext: 'Any questions, feel free to contact me!',
        title: 'Help',
        name: 'Adan Escamilla'
    })
})

//handle bars used for dynamic.

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error })
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if(error) {
        return res.send({ error })
      }
      res.send({
        forecast: forecastData, 
        location, 
        address: req.query.address
      })
    })
  })
});

//we pass in the address to geocode. (req.query.address)
//geocode takes in two arguments, the second is our callback function.
//we either have our error or data as an object, if there is an error. We send back an object with error property.
//we then call forcast. passing in the 3 arguments, 
//we send back the forcast, location, and address.

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }
  res.send({
    products: []
  })
})

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
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')


forecast(37.8267,-122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


geocode('Seattle', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


//npm -y 
//this makes it default. 
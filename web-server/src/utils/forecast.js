const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=182566dc91d2ec6fbe9af50bed79be46&query=' + latitude + ',' + longitude 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ', It is currently ' + body.current.temperature + ' degrees outside. It feels like ' + body.current.feelslike + ' degrees out.'
            )
        }
    })    
}


module.exports = forecast


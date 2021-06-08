const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=182566dc91d2ec6fbe9af50bed79be46&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ', It is currently ' + response.body.current.temperature + ' degrees outside. It feels like ' + response.body.current.feelslike + ' degrees out.'
            )
        }
    })    
}


module.exports = forecast
const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=182566dc91d2ec6fbe9af50bed79be46&query=37.8267,-122.4233&units=f'


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//     console.log(response.body.current.weather_descriptions[0] + ', It is currently ' + response.body.current.temperature + ' degrees outside. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })


//Geocoding
// Address -> Lat/Long -> Weather

// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los-Angeles.json?access_token=pk.eyJ1IjoiaXN0aGlzYWRhbiIsImEiOiJja3BscGU4N3cwMjVkMnB1ZXc3MnBkMzB3In0.1Bgtj8BGPGofjmhH4oSVEg&limit=1'

// request({ url: geocodeurl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather serviec')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//     }
// })


const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)  + '.json?access_token=pk.eyJ1IjoiaXN0aGlzYWRhbiIsImEiOiJja3BscGU4N3cwMjVkMnB1ZXc3MnBkMzB3In0.1Bgtj8BGPGofjmhH4oSVEg&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Seattle', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

//Call stack. 
//main function gets pushed to the bottom of the call stack. This starts everything.
//The rest of the functions onec they are called will get added to the call stack in order. 
//In the call stack you cant execute two things at the same time. 
//No asyncronous callbacks are ever going to run before our main function is done.
//Call stack -> Node APIs -> Event Loop -> Call stack
//Our Event loop cant run any asyncronous call backs until our Call Stack is empty.

//npm -y 
//this makes it default. 
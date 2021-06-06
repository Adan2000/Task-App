const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=182566dc91d2ec6fbe9af50bed79be46&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log('It is currently ' + response.body.current.temperature + ' degrees outside. It feels like ' + response.body.current.feelslike + ' degrees out.')
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
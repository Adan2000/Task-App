const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=182566dc91d2ec6fbe9af50bed79be46&query=40,-75&units=f'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        console.log(chunk)
    })

    response.on('end', () => {

    })

})

request.end()
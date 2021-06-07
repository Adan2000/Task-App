setTimeout(() => {
    console.log('2 Seconds are up')
}, 2000)  

const names = ['Jen', 'Kay', 'Adan']

const shortNames = names.filter((name) => {
    return name.length <= 3
})  

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Los-Angeles', (data) => {
    console.log(data)
})

const add = (arg1, arg2, callback) => {
    setTimeout(() => {
        callback( arg1 + arg2 )
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) //should print out 5 
})
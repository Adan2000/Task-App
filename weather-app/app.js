const request = require('request')





//Call stack. 
//main function gets pushed to the bottom of the call stack. This starts everything.
//The rest of the functions onec they are called will get added to the call stack in order. 
//In the call stack you cant execute two things at the same time. 
//No asyncronous callbacks are ever going to run before our main function is done.
//Call stack -> Node APIs -> Event Loop -> Call stack
//Our Event loop cant run any asyncronous call backs until our Call Stack is empty.

//npm -y 
//this makes it default. 
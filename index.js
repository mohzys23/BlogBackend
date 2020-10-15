const bodyParser = require('body-parser')



const express = require ('express')

const app = express ();

app.get('/',  (request,response) => {

    response.send('This is a main backend')
})


app.get('/login', (request,response) => {

    console.log(response)
    const moses = require('./moses.json')
    response.json(moses)
})

////app.post('.login', (request, response) => {

    //console.log(request)
    //const moses = require('./moses.json')
    //request.json(moses)
//})






app.listen(3000,() => {
    console.log('Application is running')
})
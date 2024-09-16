const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()

app.use([ authorize, logger])

app.get('/', (req, res) => {
    console.log(req.user); // { name: 'sharath', id: 3 } // can be used to check json token
    res.send('this is my home page')
})

app.get('/about', (req, res) => {
    res.send('about us')
})

app.get('/api/prods', (req, res) => {
    res.send('this is product page')
})

app.get('/api/items', (req, res) => {
    console.log(req.user); // { name: 'sharath', id: 3 }
    res.send('this is item page')
})

app.get('/demo', (req, res) => {
    res.send('this is demo page')
})

app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})

/* output: 
[nodemon] starting `node app.js`
sever listening on 5000...
authenticated
GET / 2024

another output:

http://localhost:5000/about = unauthorized
http://localhost:5000/about?user=sharath = about page will display, the same goes home or anyother
*/
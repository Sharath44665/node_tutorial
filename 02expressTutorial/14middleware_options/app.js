const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()

// app.use([ authorize, logger])

// middleware options = our own / express / third party

// express example we covered already: 
// app.use(express.static('./public'))

// third party:
// google: npm morgan   

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

//applying middleware only to api items
app.get('/api/items', [authorize, logger], (req, res) => {
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

http://localhost:5000/about 
http://localhost:5000/api/items?user=sharath = about page will display
*/
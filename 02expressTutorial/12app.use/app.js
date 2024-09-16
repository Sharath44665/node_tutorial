const express = require('express')
const logger = require('./logger')
const app = express()

// req => middleware => res
// if u have more pages, this method wont look nice use this
               
// app.use(logger) // applies to all        
app.use('/  api', logger) // applies to those paths which have /api/somepage/anotherpage/...    

app.get('/', (req, res) => {
      
    res.send('this is my home page')
})

app.get('/about', (req, res) => {
    res.send('about us')
})

app.get('/api/prods', (req, res) => {
    res.send('this is product page')
})

app.get('/demo', (req, res) => {
    res.send('this is demo page')
})

app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})

/* output: 
sever listening on 5000...
GET /about 2024
GET / 2024
GET /demo 2024
GET /api/prods 2024
*/
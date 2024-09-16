const express = require('express')
const app = express()

// req => middleware => res
// here logger is the middleware
const logger = (req, res,next) => {
    const method  = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time) // GET / 2024  
    // res.send('do something') 
    next()
}                   

app.get('/', logger, (req, res) => {
      
    res.send('this is my home page')
})

app.get('/about', logger,    (req, res) => {
    res.send('about us')
})


app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})
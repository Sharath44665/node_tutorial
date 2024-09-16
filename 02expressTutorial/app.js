const express = require('express')
// let {people} = require('./data')
const people = require('./routes/people');
const login = require('./routes/auth')
const app = express()

app.use(express.static('./public_methods')) // using static folders

// parse form data
app.use(express.urlencoded({extended:false}))
// parse json data      
app.use(express.json()) // to access from forms     
app.use('/api/people', people) // routes start from /api/people

app.use('/login', login)
                     
        

app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})

/* output: 

*/      
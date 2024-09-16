const express = require('express')
let {people} = require('./data')

const app = express()

app.get('/api/people', (req, res) => {
    res.json({success: true, data: people       })
})

app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})

/* output: 

*/
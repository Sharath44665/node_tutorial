const express = require('express')
let {people} = require('./data')

const app = express()

app.use(express.static('./public_methods')) // using static folders

// parse form data
app.use(express.urlencoded({extended:false}))

app.get('/api/people', (req, res) => {
    res.json({success: true, data: people})         
})

app.post('/login', (req, res) => {
    // console.log(req.body) // [Object: null prototype] { name: '  demo' } 
    // please note that, there is name in html form
    const { name } = req.body;

    if (name) {
        return res.status(200).send(`Successful login for ${name}`)
    }

    return res.status(404).send('Error! Please add the user')  
})                      

app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})

/* output: 

*/  
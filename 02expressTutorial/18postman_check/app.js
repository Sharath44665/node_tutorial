const express = require('express')
let {people} = require('./data')

const app = express()

app.use(express.static('./public_methods')) // using static folders

// parse form data
app.use(express.urlencoded({extended:false}))
// parse json data
app.use(express.json()) // to access from forms     

app.get('/api/people', (req, res) => {
    res.json({success: true, data: people})         
})  



app.post('/api/people', (req, res) => {
    // inspect -> network -> payload ( to see the data what we pased in form)

    // console.log(req.body)
    const {name} = req.body

    if (!name) {
        return      res.status(400).send({sucess: false, msg: 'please add some value'})
    }
    res.status(201).send({sucess: true, person: name}) // 201 is required for post 
            
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

app.post('/api/demo/postman', (req, res) => {
    const {name} = req.body;
    if (!name){
        return res.status(400).send({success: false, msg: "Hey something went wrong"})
    }
    
    res.status(201).send({success:true, userData: [...people, name]})
})  



app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})

/* output: 

*/      
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json([{name:'sharath'}, {name:'John'}])          
})

app.listen(5000, ()=> {
    console.log('sever listening on 5000...')
})
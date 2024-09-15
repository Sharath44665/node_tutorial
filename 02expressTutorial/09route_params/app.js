const express = require('express')
const app = express()
const {products} = require('./data') 

app.get('/', (req, res) => {
    res.send('<h1>My Home</h1><a href="api/products">products</a>')       
})

app.get('/api/products',  (req, res) => {

    newProd = products.map((prod) => {
        const {id, name, image} = prod
        return {id, name, image}
    })
    res.json(newProd)                   
})

app.get('/api/products/:pid',(req, res) => {
    // console.log(req)
    // console.log(req.params) // returns string
    const {pid} = req.params;
    const singleProduct = products.find((prod) => {
        if (prod.id === parseInt(pid)){
            return prod
        }
    })
    if (singleProduct){
        res.json(singleProduct)
    }
    else{
        res.status(404).send('product not found')   
    }

})


// quite long urls

app.get('/api/products/:pid/sss/:demoid', (req, res) => {
    console.log(req.params) // { pid: '2', demoid: '333' }
});
/*
app.get('/api/products/1', (req,res) => {
    singleProd = products.find((prod) => {
        if (prod.id === 1){
            return prod
        }
       
    })
    res.json(singleProd)
})
    */

app.listen(5000, ()=> {          
    console.log('sever listening on 5000...')
})
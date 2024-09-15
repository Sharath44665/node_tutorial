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

// qurey string params
app.get('/api/v1/query', (req, res) => {
    // url = http://localhost:5000/api/v1/query?name=sharath&id=3   
    // console.log(req.query); // { name: 'sharath', id: '3' }
    // res.send("hello from sharath")

    // url = http://localhost:5000/api/v1/query?search=sharath&limit=3 
    console.log(req.query)
    const {search, limit} = req.query;
    let sortedProd = [...products]

    if (search){
        // http://localhost:5000/api/v1/query?search=a
        sortedProd = sortedProd.filter((prod) => {
            return  prod.name.startsWith(search)
        })
    }
    if (limit){
        // http://localhost:5000/api/v1/query?limit=2       
        sortedProd =sortedProd.slice(0, Number(limit))
    }

    // http://localhost:5000/api/v1/query?search=a&limit=1

    if (sortedProd.length < 1){ // if no match found
        // res.status(200).send('product not found');
        res.status(200).json([{success: true, data: []}])   
    }
    res.send(sortedProd )

})
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
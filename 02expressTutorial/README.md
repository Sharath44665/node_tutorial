## finding a value: 

``` js
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
```

## filter and search
returns multiple objects if there is a match

``` js
let sortedProd = [...products]

if (search){
        // http://localhost:5000/api/v1/query?search=a
        sortedProd = sortedProd.filter((prod) => {
            return  prod.name.startsWith(search)
        })
    }
```

## slicing
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
``` js
if (limit){
        // http://localhost:5000/api/v1/query?limit=2       
        sortedProd =sortedProd.slice(0, Number(limit))
    }
```


const express = require('express');
const app = express()

app.get('/', (request, response) => {
    response.status(200).send("Home page Sharath");
})

app.get('/about', (request, response) => {
    response.status(200).send("about page")
})

app.all('*', (request, response) => {
    response.status(404).send('<h1>Page not found</h1>');
})
// app.get = read
// app.post = insert
// app.put = update
// app.delete
// app.all
// app.use
// app.listen

app.listen(5000, () =>{
    console.log("server listening at 5000...")
})
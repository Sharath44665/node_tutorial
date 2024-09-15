const express = require('express');
const app = express();
const path = require('path')

// using static files
app.use(express.static('./public'))

// ----------- DONT FORGET TO CHANGE THE PATH ---------------------------- 
// you can comment line 10 to 12 and place the index.html in public folder,
// which will in return give the same output
app.get('/', (req, res) => { // request and response
    res.sendFile(path.resolve(__dirname, './06express_navbar_app/index.html'))
})


app.all('*', (req, res) => {
    res.status(404).send('resource not found.')
})

app.listen(5000, () => {
    console.log("server running on port 5000...")
})  
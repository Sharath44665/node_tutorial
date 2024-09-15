const http = require('http')
const server = http.createServer((request, response) =>{
    console.log("user hit the server")
    response.end("hello world from sharath  ")
})
console.log("exress js")

server.listen(5000)



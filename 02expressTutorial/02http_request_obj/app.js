const http = require('http')
const server = http.createServer((request, response) =>{
    // response.writeHead(200, {'content-type':'text/html'}) // if you 'text/plain' then it will treated like text     
    
    // console.log(request.method) // GET
    // console.log(request.url) // returns url
    const url = request.url
    if (url === "/"){
        response.writeHead(200, {'content-type':'text/html'}) 
        response.write('<h1>hello world from sharath...</h1>')  
        response.end()
    }
    else if (url === "/about"){
        response.writeHead(200, {'content-type':'text/html'}) 
        response.write('<h1>about page</h1>')  
        response.end()
    }
    else {
        response.writeHead(404, {'content-type':'text/html'}) 
        response.write('<h1>Page not found</h1>')  
        response.end()
    }
})
console.log("exress js")

server.listen(5000)



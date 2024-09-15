const http = require('http');
const {readFileSync} = require('fs');

const server = http.createServer((request, response) =>{
    // response.writeHead(200, {'content-type':'text/html'}) // if you 'text/plain' then it will treated like text     
    
    // console.log(request.method) // GET
    console.log(request.url) // returns url 
    /*
    /styles.css
/logo.svg
/browser-app.js
*/
    // DONT FORGET TO CHANGE THE PATH
    const homepage = readFileSync('./04navbar_app/index.html')
    const logic = readFileSync('./04navbar_app/browser-app.js')
    const styles = readFileSync('./04navbar_app/styles.css')
    const logo = readFileSync('./04navbar_app/logo.svg')

    const url = request.url

    if (url === "/"){
        
        response.writeHead(200, {'content-type':'text/html'}) 
        response.write(homepage)  
        response.end()
    }
    else if (url === "/styles.css"){
        response.writeHead(200,{'content-type':'text/css'})
        response.write(styles)
        response.end()
    }
    else if (url === "/logo.svg"){
        response.writeHead(200, {'content-type':'image/svg+xml'})
        response.write(logo)
        response.end()
    }
    else if (url === "/browser-app.js"){
        response.writeHead(200, {'content-type':'text/javascript'})
        response.write(logic)
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



const http = require('http');

const server = http.createServer((request, response) => {
    // console.log(request)
    // response.write("Welcome to Node ");
    // response.end()

    if (request.url === "/"){
        response.end("Welcome to Node Demo");
    }
    if (request.url == "/about"){
        response.end("this is a about page")
    }
    else{
        response.end(
            `<h1>Ooops... </h1>
            <p>page not found</p>
            <a href="/"> back home</a>
            `
        );
    }
    
})

server.listen(5000)
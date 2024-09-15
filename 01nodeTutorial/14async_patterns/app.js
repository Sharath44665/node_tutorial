const http = require("http");

const server = http.createServer((request, response) => {

    if (request.url === "/"){
        response.end("home page")
    }
    if (request.url === "/about"){
        // blocking code

        for (let i = 0; i< 1000;i++){
            for (let j = 0; j<1000; j++){
                console.log("about          ")
            }
        }
        response.end("about page")
    }
    if(request.url !== "/" && request.url !== "/about"){
        response.end("error page");  
    }

})  

server.listen(5000, ()=>{
    console.log('server listening at 5000...');
})

// run the code and simultaneously open two tabs,
// result: the first tab will take time execute about page 
//  second and third tab waits for completion of first tab, after completing second tab, then 2nd & 3rd executes

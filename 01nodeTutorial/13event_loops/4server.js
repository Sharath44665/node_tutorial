const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})  

/*
output: in browser: http://localhost:5000

console:
[nodemon] starting `node 4server.js`
Server listening on port : 5000....
request event
request event
[nodemon] restarting due to changes...
*/

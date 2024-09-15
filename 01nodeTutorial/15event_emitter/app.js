const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log(`data recieved`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic`)
})

customEmitter.on("demo", (id, user)=>{
   console.log(`demo logic ${id}, ${user}`) 
})

customEmitter.emit('response') 
customEmitter.emit("demo", 205, "Sharath")

/*
[nodemon] starting `node app.js`
data recieved
some other logic
demo logic 205, Sharath
[nodemon] clean exit - waiting for changes before restart
*/


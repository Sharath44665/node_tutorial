setInterval(() => {
    console.log('hello world')
  }, 2000)
  console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error

/* 
output:
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node 3setInterval.js`
I will run first
hello world
hello world
hello world
hello world
hello world
.
.
.
*/
// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

/*
output:
[nodemon] starting `node 2setTimeout.js`
first
third
second
[nodemon] clean exit - waiting for changes before restart

*/
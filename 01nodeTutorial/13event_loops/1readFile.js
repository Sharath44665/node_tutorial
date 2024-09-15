const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
// console.log(__dirname)
console.log('starting next task')


// output:
/*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node 1readFile.js`
started a first task
starting next task
this is first file
completed first task
[nodemon] clean exit - waiting for changes before restart
*/
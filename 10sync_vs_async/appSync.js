const {readFileSync, writeFileSync, read} = require('fs');

console.log("start")

// reading file
const first = readFileSync("./content/first.txt", 'utf8')
const second = readFileSync("./content/second.txt", 'utf8')

console.log(first) // this is first text file
console.log(second) // this is second text file

// writing a file, if file not found, node will automatically create one

writeFileSync(
    "./content/result.txt", `result text: ${first}, ${second}`,
    {flag: 'a'}
)   
console.log("finish")
console.log("next start")
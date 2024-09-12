const {readFile, writeFile} = require('fs');

console.log("start  ")
readFile('./content/first.txt', 'utf8', (err,result) => { 
    if (err){
        console.log(err)
        return
    }
    // console.log(result) // if utf8 not mentioned: <Buffer 6d 79 20 66 69 72 73 74 20 66 69 6c 65 20 63 6f 6e 74 65 6e 74>
    // my first file content

    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        const second = result;
        writeFile("./content/resultAsyncFile.txt", 
            `result Text: ${first}, ${second}`, {flag:'a'}, (err, result) =>{
                if (err){
                    console.log(err)
                    return;
                }
                console.log("finish")
            })
    })
})

console.log("starting next task")
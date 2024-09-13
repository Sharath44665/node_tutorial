// node native option
// refractoring code = making even smaller
const {readFile, writeFile} = require('fs').promises;
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result.txt',
            `\nthis is awesome, first: ${first}, second: ${second}`, 
            {flag:'a'});
        console.log(first)
        console.log(second)
    }
    catch(err){
        console.log(err)
    }
}

start()


/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err){
                // console.log(err)
                // return
                reject(err)
            }
            else{
                // console.log(data)
                resolve(data)
            }
        });
    })
}
*/

/*
getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => {console.log(err)})
*/

/*
const start = async () => {
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first)
        console.log(second)
    }
    catch(err){
        console.log(err)
    }
}

start()
*/
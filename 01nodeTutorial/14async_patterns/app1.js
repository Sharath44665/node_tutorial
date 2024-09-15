const {readFile} = require('fs');
const { get } = require('http');

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

/*
getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => {console.log(err)})
*/


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
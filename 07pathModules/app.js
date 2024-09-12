const path = require('path');

console.log(path.sep) // /

const filePath = path.join('/content', 'subfolder', "demo.txt")
console.log(filePath) // /content/subfolder/demo.txt

// basename 

const base = path.basename(filePath)
console.log(base) // demo.txt


console.log(__dirname) // /home/sharath/Documents/nodeTutorial/07pathModules

const absolutePath = path.resolve(__dirname, "content", "subfolder", "demo.txt")
console.log(absolutePath) // /home/sharath/Documents/nodeTutorial/07pathModules/content/subfolder/demo.txt

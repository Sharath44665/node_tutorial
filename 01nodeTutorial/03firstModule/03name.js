const secret = "SuperSecret";
const userone = "sharath";
const anotherName = "chandra";

// console.log(module)

// output:

// {
//     id: '.',
//     path: '/home/sharath/Documents/nodeTutorial',
//     exports: {},
//     filename: '/home/sharath/Documents/nodeTutorial/03name.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/sharath/Documents/nodeTutorial/node_modules',
//       '/home/sharath/Documents/node_modules',
//       '/home/sharath/node_modules',
//       '/home/node_modules',
//       '/node_modules'            
//     ]
//   }

module.exports = {userone: userone, anotherName: anotherName};

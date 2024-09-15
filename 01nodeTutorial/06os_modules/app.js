const os  = require('os')

// info about current user
const compUserName = os.userInfo()
console.log(compUserName)
/*
output:
{
    uid: 1000,
    gid: 1000,
    username: 'sharath',
    homedir: '/home/sharath',
    shell: '/bin/bash'
  }
*/


// uptime in seconds

console.log(`system uptime: ${os.uptime()}`) // system uptime: 6873.25


const currenOs = {
    name: os.type(),
    release: os.release(),
    totalMemory : os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currenOs)

/* output:  
{
  name: 'Linux',
  release: '6.10.8-200.fc40.x86_64',
  totalMemory: 8191348736,
  freeMemory: 4143947776
}

*/
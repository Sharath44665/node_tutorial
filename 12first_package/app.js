const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItesm = _.flattenDeep(items)
console.log(newItesm) // [ 1, 2, 3, 4 ]
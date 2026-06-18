const os = require('os')

const memory = os.totalmem()
const freeMemory = os.freemem()
console.log(`Total Memory: ${memory}`)
console.log(`free memory: ${freeMemory}`)

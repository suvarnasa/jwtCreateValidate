const fs = require('fs')
const buf = fs.readFileSync('./priv.key','utf-8')
console.log(buf);
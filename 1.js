const fs = require('fs')

let today = new Date()
let config = {
  ver: `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}.${today.getHours()}.${today.getMinutes()}`
}
fs.writeFileSync('./dist/config.json', JSON.stringify(config))

// let content = fs.readFileSync('./template.js', 'utf-8')

// fs.writeFileSync('./dist/baidu-map.js', content)

fs.copyFileSync('./template.js','./dist/baidu-map.js')
const fs = require('fs')

let today = new Date()
let config = {
  ver: `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}.${today.getHours()}.${today.getMinutes()}`
}
fs.writeFileSync('./dist/config.json', JSON.stringify(config))

let content = fs.readFileSync('./dist/index.html', 'utf-8')


let reg = /\/dev\//g


let baidu_dev = content.replace(reg,'https://raw.githubusercontent.com/shaonianzhentan/lovelace-baidu-map/master/dist/')

fs.writeFileSync('./dist/baidu-dev.html', baidu_dev.replace(/\.\/js\//g,'https://raw.githubusercontent.com/shaonianzhentan/lovelace-baidu-map/master/dist/js/'))

fs.writeFileSync('./dist/index.html', content.replace(reg,''))

fs.copyFileSync('./template.js','./dist/baidu-map.js')
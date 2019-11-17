const color = require('./color')
const fs = require('fs')
const http = require('http')
// 102-300x300.jpg
// color.getPalette('102-5000x5000.jpg')
//     .then((palette) => {
//          console.log(palette) 
//          return {
//              json: JSON.stringify(palette)
//          }
//     })
//     .then((palette) => { 
//         fs.writeFile('../public/images_data/102-5000x5000.jpg.json', palette.json, null)
//     })
//     .then( () => {
//         console.log('Done')
//     })

const server = http.createServer((req, res) => {
    if( req.url == '/image' ){
        var data = fs.readFileSync('../public/images/102-300x300.jpg')
        res.write(data)
    }else if( req.url == '/data') {
        var data = fs.readFileSync('../public/images_data/102-300x300.jpg.json')
        res.end(data)
    }else{
        res.end("It is not working :(")
    }
    
})
server.listen(8000)
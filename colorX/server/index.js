// const color = require('./color')
const fs = require('fs')
const http = require('http')
// 102-300x300.jpg
// try{
//     color.getPalette('102-5000x5000.jpg')
//         .then((palette) => {
//             console.log(palette)
//             return {
//                 json: JSON.stringify(palette)
//             }
//         })
//         .then((palette) => {
//             fs.writeFile('../public/images_data/102-5000x5000.jpg.json', palette.json, null)
//         })
//         .then(() => {
//             console.log('Done')
//         })
// }catch(error){
//     console.log(error)
// }


const server = http.createServer((req, res) => {

    if ( result = req.url.match(/\/image\/(.*\.jpg)/)) {
        try{
            var data = fs.readFileSync(`../public/images/${result[1]}`)
            res.end(data)
        }catch(error){
            res.end('Page not found!')
        }
        
    } else if ( (result = req.url.match(/\/data\/(.*\.json)/) )) {
        try{
            var data = fs.readFileSync(`../public/images_data/${result[1]}`)
            res.end(data)
        }catch(error){
            res.end('Page not found!')
        }
        
    } else if (req.url = '/') {
        try {
            var data = fs.readFileSync(`../public/index.html`)
            res.end(data)
        } catch (error) {
            res.end('Page not found!')
        }

    } else {
        res.end("It is not working :(")
    }

    

})
server.listen(3000)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {


    let data = fs.readFileSync('./data/image.json')
    // data -> Buffer -> String(JSON) -> Object
    //                   String(JSON) <- Object
    data_obj = JSON.parse(data.toString())
    data_obj.image = fs.readFileSync('./data/image.jpg').toString('base64')
    console.log(data_obj)

    res.setHeader('Content-type', 'aplication/json')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    res.end( JSON.stringify(data_obj) ) // aici bufferu se strica
})
server.listen(3000)

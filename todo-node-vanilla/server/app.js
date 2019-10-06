// fisierul principal al aplicatiei "server"

// utilizam modulul "http"
const http = require('http') 

const fs = require("fs")

let obj = {status: "ok"}
// creiem obiectul serverului
const server = http.createServer(loadData)

function jsonHeader(res){
    res.setHeader('Content-Type', 'application/json')
    return res
}

function json(data){
    data = JSON.stringify( data )
    return data
}
function parse(data) {
    data = JSON.parse( data )
    return data
}

function file(url) {
    fs.readFile(url, (err, data) => {
        if(!err){
            return data
        }else{
            return err
        }
    }
}

function loadData(req, res) {
    //ROUTES
    if(req.url == '/tasks'){
        fs.readFile("./server/data.json", (err, data) => {
            res = jsonHeader(res)
            if (!err) {
                let t = parse(data.toString())
                res.end(json(t.tasks))
            } else {
                res.end(json(err))
            }
        })
    }else if(req.url == '/users'){
        fs.readFile("./server/data.json", (err, data) => {
            res = jsonHeader(res)
            if (!err) {
                let u = parse(data.toString())
                res.end(json(u.users))
            } else {
                res.end(json(err))
            }
        })
    }else{
        res.end(json( {status: "Not Found"} ))
    }
    

}

server.listen(5000)

// {"status": "ok"}

// default:
// http - 80
// https - 443
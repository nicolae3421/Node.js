// punctul de start

// conectam un modul
const fs = require("fs")


function loadData(){
    // var data = fs.readFileSync("./server/data.json")
    // console.log( data.toString() )

    fs.readFile("./server/data.json",( err, data ) => {
        if( !err ){
            console.log(data.toString())
            showData( data.toString() )
        }else{
            console.log( err)
        }
    })

}

function showData( data ){
    console.log( data )
}

loadData()
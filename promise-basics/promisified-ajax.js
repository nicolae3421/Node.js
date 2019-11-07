const API_URL = 'http://ips-api.com/json'

new Promise(function (resolve, reject) {
    console.log(5, "Waiting")
    
    ////////////////////
    // asynchronuous
    let xhr = new XMLHttpRequest()
    xhr.open("GET", API_URL)
    xhr.send()
    xhr.onload = function(){
        resolve(JSON.parse(xhr.responseText))
    }
    xhr.onerror = function () {
        reject()
    }
        
    ////////////////////

})
.then(function (message) {
    // logic related to success
    console.log(6, 'Code resolved', message) /// <<<< data
})
.catch(function (message) {
    // logit related to ERRORS
    console.log(6, 'Code rejected', message)
})
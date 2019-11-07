const API_URL = 'http://ip-api.com/json'

// functia primeste o adresa si returneaza o promisiune care asteapta datele de pe aceasta adresa
function ajaxGet(url){
    return new Promise(function (resolve, reject) {
        console.log(5, "Waiting")

        ////////////////////
        // asynchronuous
        let xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.send()
        xhr.onload = function () {
            resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = function () {
            reject()
        }

        ////////////////////

    })
}





ajaxGet(API_URL)
    .then(function (message) {
        // logic related to success
        console.log(6, 'Code resolved', message) /// <<<< data
    })
    .catch(function (message) {
        // logit related to ERRORS
        console.log(6, 'Code rejected', message)
    })
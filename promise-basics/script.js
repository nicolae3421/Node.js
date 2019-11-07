// 1 pending forever
// var p = new Promise( function(){ } )
// console.log( 1, p )

// 2 imediately rezolved
// var p = new Promise ( function( resolve ){ 
//     resolve()
//  } )
//  console.log(2, p)

 // 3 imediately rejected
// var p = new Promise(function ( resolve, reject ) {
//     reject()
// })
// console.log(2, p)
///////////////////////
// Promise( something ) and then (do this)
// 4 imediately rezolved
// var p = new Promise(function (resolve) {
//     console.log(4, "Resolving promise")
//     resolve()
// })
// p.then( function(){
//     console.log(5, 'Code after promise')
// })
// 5 delay resolved
// new Promise(function (resolve) {
//     console.log(5, "Waiting")
//     setTimeout(function(){resolve("done")}, 1000)
// })
// .then(function (message) {
//     console.log(6, 'Code after promise', message)
// })
// 6 delay rejection
new Promise(function (resolve, reject) {
    console.log(5, "Waiting")
    setTimeout(function(){
        Math.random() > 0.5 ? reject("oops!") : resolve("done")
    }, 1000)
})
.then(function (message) {
    // logic related to success
    console.log(6, 'Code resolved', message)
})
.catch(function (message) {
    // logit related to ERRORS
    console.log(6, 'Code rejected', message)
})
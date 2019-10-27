const events = require('events')
const {EventEmitter} = require('events')

// console.log(events,EventEmmitter)


// Completam clasa EventEmitter
class NewsPublisher extends EventEmitter{
    constructor(name){
        super(); //initiem logica de baza prin constructorul clasei superioare
        this.name = name
    }
}
const news_point = new NewsPublisher("Simpals Point");

// Adaugam subscriberi
news_point.on('sport', (data) => {
    console.log(data.title)
    console.log(data.published)
    console.log('author: ' + data.author)
}) 
news_point.on('politics', (data) => {
    console.log(data.title)
    console.log(data.published)
    console.log('author: ' + data.author)
}) 

// Simulam aparitia evenimentelor
var now = new Date()
setTimeout(() => { 
    news_point.emit('sport', { title: "Drugs detected in moldavian sportsmen", published:  now, author: news_point.name})
}, 5000)
setTimeout(() => {
    news_point.emit('politics', { title: "Elections emited", published: now, author: news_point.name})
}, 2000)
setTimeout(()=>{}, 24*60*60*1000)



// console.log(news_point)
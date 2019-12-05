function load (){

    // CORS policy

    fetch('http://127.0.0.1:3000')
        .then( response=>{
            return response.json()
        })
        .then( json => {
            let container = document.querySelector('#result')
            let h1 = document.createElement('h1')
                h1.innerText = json.title
            let author = document.createElement('p')
                author.innerText = json.author
            let data = document.createElement('p')
                data.innerText = json.data

            // let img_data = Buffer.from(json.image.data)

            let image = document.createElement('img')
                image.src = 'data:image/jpeg;base64,' + img_data
            // console.log(json)

            container.appendChild(h1)
            container.appendChild(author)
            container.appendChild(data)
            container.appendChild(image)

        })
}

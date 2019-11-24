// module with color tools
const Vibrant = require('node-vibrant')

exports.getPalette = ( image_name ) => {
    return Vibrant.from(`../public/images/${image_name}`)
        .getPalette()
}
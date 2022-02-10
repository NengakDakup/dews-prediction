const fs = require('fs');
const path = require('path');

let imagePath = path.resolve(__dirname, '../public/images/gallery/pix');

function fetchImages(){
    let images = fs.readdirSync(imagePath, (err, files) => {
        return files;
    })
    return images;
}

module.exports = fetchImages;
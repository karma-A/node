
const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {

let path = `./views/`;
switch(req.url) {
    case '/': path += 'index.html'; break;
    case '/aboutus': path += 'aboutus.html'; break;
    default: path += '404.html'; break;
}
fs.readFile(`${path}`,(function (err, data) {
    if (err){
        console.log(err);
        res.end();
    }else {
        res.end(data);
    }
}))
})


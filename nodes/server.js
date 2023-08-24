
const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {

let path = `./views/`;
switch(req.url) {
    case '/': path += 'index.html'; break;
    case '/aboutus': path += 'About.html'; break;
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

const port = 5500;
server.listen(port);
console.log(`listening on port: ${port}`)


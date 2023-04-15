const fs = require('fs');

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.method,req.url);
    //set header content type
     res.setHeader('Content-Type','text/html');
    // res.write("<p>Hello My New Job</p>");
    // res.write("<h1>Hello My New Job</h1>");
    // res.write("<p>Hello My New Job</p>");
    // res.end();
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3333,'localhost',()=>{
    console.log('listening on local host 3333');
});
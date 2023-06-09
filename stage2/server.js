const fs = require('fs');

const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.method,req.url);
    //set header content type
     res.setHeader('Content-Type','text/html');
     let path = './views/';
     switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about' );
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;        
     }
    // res.write("<p>Hello My New Job</p>");
    // res.write("<h1>Hello My New Job</h1>");
    // res.write("<p>Hello My New Job</p>");
    // res.end();
    fs.readFile( `${path}`,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else {
            
            res.write(data);
            res.end();
        }
    });
});

server.listen(3333,'localhost',()=>{
    console.log('listening on local host 3333');
});
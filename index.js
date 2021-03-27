
//module
//them 1 module ten la http
var http = require('http');
// var myModule = require('./myModule');
var fs=require('fs');
http.createServer(function (request,response){
    response.writeHead('200',{'Content-tye':'text/html'});
    var url = request.url;
    if(url == '/'){
        fs.readFile('index.html',function (error,data){
            if (error != null){
                response.end(error);
            }else{
                response.write(data);
                response.end();
            }
        });
    }
    else if(url == '/login'){
        fs.readFile('login.html',function (error,data){
            if (error != null){
                response.end(error);
            }else{
                response.write(data);
                response.end();
            }
        });
    }
    else if(url == '/signup'){
        fs.readFile('signup.html',function (error,data){
            if (error != null){
                response.end(error);
            }else{
                response.write(data);
                response.end();
            }
        });
    }
}).listen(process.env.port || 3000);
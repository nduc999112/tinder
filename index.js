
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
    // else if(url == '/show'){
    //     fs.readFile('test.text',function (error,data){
    //         if (error != null){
    //             response.end(error);
    //         }else{
    //             response.write(data);
    //             response.end();
    //         }
    //     });
    // }else if(url == '/create'){
    //     var data = 'asd ';
    //
    //     fs.writeFile('test.text',data,function (err){
    //         if(err != null){
    //             response.end(err);
    //         }else{
    //             response.end('tao file thanh cong');
    //         }
    //     });
    // }else if(url == '/append'){
    //     var data = 'asd123   ';
    //     fs.appendFile('test.text',data,function (error){
    //         if (error != null){
    //             response.end(error);
    //         }else{
    //             response.end('append file thanh cong');
    //         }
    //     });
    // }else if(url == '/unlink'){
    //     fs.unlink('test.text',function (error){
    //         if (error != null){
    //             response.end(error);
    //         }else{
    //             response.end('Xoa file thanh cong');
    //         }
    //     });
    // }else if(url == '/rename'){
    //     fs.rename('test.text','test222.txt',function (error){
    //         if (error != null){
    //             response.end(error);
    // //         }else{
    //             response.end('Rename file thanh cong');
    //         }
    //     });
    // }else{
    //     response.end('404 Not Found');
    // }


}).listen(8081);
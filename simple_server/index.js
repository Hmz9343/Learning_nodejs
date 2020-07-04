var http=require('http');
var fs=require('fs');

fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:"+data.toString());
});

var logModule=require('./Log.js');

logModule.info("test script. ended");

var obj={
    authorname:'Ryan Dahl',
    language:'Nodejs'
}

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Hello world\n");
}).listen(8081);

console.log('server running at http://127.0.0.1:8081/');
//console.log(data.toString());
console.log("Program Ended.");

//console.log(__filename);
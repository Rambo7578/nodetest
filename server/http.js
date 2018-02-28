var http=require('http');
console.log('htpp starting');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end('<br>안녕~난 http야</br>')
    
}).listen(4003);
console.log('htpp started');
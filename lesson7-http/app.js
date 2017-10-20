var http = require('http');
var qs = require('querystring');
http.createServer(function(req,res){
   if(req.url=='/'){
	   	res.writeHead(200,{'Content-Type':'text/html'});
	    res.end('<form method="POST" action="/url"><input type="text" name="name"> <button>submit</button></form>');
   }else if(req.url=='/url'&&req.method=="POST"){
   	var body='';
   	   req.on('data',function(chunk){
   	   		body+=chunk;
   	   });
   	   req.on('end',function(){
	   	   	res.writeHead(200,{'Content-Type':'text/html'});
	   	   	console.log(req.headers);
	   		res.end('<h1>'+req.headers['content-type']+'</h1><h2>hello you sent '+req.method +'   request\n'+qs.parse(body).name+'</h2>');
   	   })
   		
   }else{
   	res.writeHead(404);
   	res.end('<h1 style="text-align: center;margin-top:50px;">Not Found!</h1>');
   }
   
}).listen(3000);
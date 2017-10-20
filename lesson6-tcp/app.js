var net = require('net');

var count =0;

var server=net.createServer(function(conn){
	conn.setEncoding('utf8');
	conn.write('welcome node-chat,there are ' + count +'  other people in line\n');
	count++;	 

	conn.on('close',function(){
		console.log('someone has quited')
		count--;
	});

	conn.on('data',function(data){
		console.log(data);
	})
});

server.listen(3000,function(){
	console.log('server is running at port 3000');
});


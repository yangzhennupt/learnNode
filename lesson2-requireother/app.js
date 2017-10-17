var express = require('express');
var util = require('utility');
var app = express();

app.get('/',function(req,res){
	if(req.query.q){
		//res.send(util.md5(req.query.q));
		res.send(util.sha1(req.query.q));
	}else{
		res.send('你输入的参数有误');
	}
});
app.listen(3000,function(){
	console.log('app is running at port 3000!');
})
//调用express模块
var express = require('express');
//调用express初始化一个实例
var app = express();
//express实例本身有很多方法，这里用的get方法，拦截'/'路径下的get请求
app.get('/',function(req,res){
	res.send('Hello Express World！');
});
//服务器在3000端口启动
app.listen(3000,function(){
	console.log('app server is started at port 3000!')
})
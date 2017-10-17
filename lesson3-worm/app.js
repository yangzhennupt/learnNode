var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var app = express();

app.get('/',function(req,res,next){
	superagent.get('https://cnodejs.org/')
	.end(function(err,netRes){
		if(err){
			return next(err);
		}
		console.log(netRes);
		var $ = cheerio.load(netRes.text);
		var items = [];
		$('#topic_list .topic_title').each(function(index,ele){
			var $item = $(ele);
			items.push({
				title:$item.attr('title'),
				href:$item.attr('href')
			});
		});
		res.send(items);
	});
});

app.listen(3000,function(){
	console.log( 'server started at port 3000');
})
//var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
//var ep = require('eventproxy');
var url = require('url');
var async = require('async');
//var app = express();
var fs = require('fs');

var cnodeUrl  = 'https://cnodejs.org/';
var topicContent = [];
superagent.get(cnodeUrl)
		.end(function(err,res){
			if(err){
				return console.error(err);
			}
			var topicUrls=[];
			var $ = cheerio.load(res.text);
			 $('#topic_list .topic_title').each(function (index, element) {
		      		var $element = $(element);
		      		var href = url.resolve(cnodeUrl, $element.attr('href'));
		      		topicUrls.push(href);
   				 });
			  
			 async.mapLimit(topicUrls,3,function(url,callback){
					fetUrl(url,callback)
				},function(error,result){
					console.log('final:');
					console.log(result.length);
					 
				 
					fs.writeFile('./test.json',result,{encoding:'utf-8'},function(err){
						console.log('saved!');
					})
				});
		})

var fetUrl= function(url,callback){
	superagent.get(url)
			.end(function(error,urlRes){
				if(error){
					return console.error(error);
				}
				var $ = cheerio.load(urlRes.text);
				var firstComment = $('#content .reply_item').first().find('.markdown-text').text();
				 // topicContent.push(JSON.stringify({
				 // 	topicUrl:url,
				 // 	comment:firstComment
				 // }))
				 callback(null,JSON.stringify({
				 	topicUrl:url,
				 	comment:firstComment
				 }))
				
			})
}

// app.listen(3000,function(){
// 	console.log('server is running at port 3000!');
// })


var fs = require('fs');
//流的使用

// var stream = fs.createReadStream('package.json');

// stream.on('data',function(chunk){
// 	console.log('reading');
// 	console.log(chunk);
// });

// stream.on('end',function(){
// 	console.log('done!');
// });

// 监听json文件的变动

// var files = fs.readdirSync(process.cwd());
// files.forEach(function(file){
// 	if(/\.json/.test(file)){
// 		fs.watchFile(process.cwd()+'/'+file,function(){
// 			console.log('- ' + file +' has changed!');
// 		})
// 	}
// })

//监听目录下的文件变动

fs.watch(process.cwd(),function(option,files){
 console.log(files+ ' - ' + option);
});
var connect = require('connect'),
	users  = require('user.json');

var server = connect(
	connect.logger('dev'),
	connect.bodyParser(),
	connect.session({secret:'my app secret'}),
	function(req,res,next){

	},
	function(req,res,next){
		
	}
)
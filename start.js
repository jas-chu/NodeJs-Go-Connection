
var request = require('request'); //npm install -save request
request.get('http://localhost:8080/clientes', function(error, response, body){
	if (!error && response.statusCode === 200){
		console.log(body);
		//var data = JSON.parser(body);
	} else {
		console.log(error);
		console.log("crasheo");
	}
});
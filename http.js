/*console.log(process.argv[2]);
console.log(process.argv[3]);*/
/*
var http = require('http');
	http.get(process.argv[2], function callback (response) {   
	//console.log(response.data);	
	 response.on("data", function (data) {
		 console.log(data.toString());
	 })
		response.setEncoding('utf8')
	       response.on('data', console.log)
	       response.on('error', console.error)
});*/


/*http.get("http://www.google.com/index.html", function(res) {
	  console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});*/




var http = require('http');
/*var concat = require('concat-stream');

var write = concat(function(data) {})
write.write([1,2,3]);
write.write([4,5,6]);
write.end();

console.log(write);*/

var bl = require('bl');
var bl2 = require('bl');
//var concat = require('concat-stream');

//	console.log(process.argv[2],process.argv[3],process.argv[4]);
	http.get(process.argv[2], function callback (response) {   
		response.pipe(bl(function(err,data){
			console.log(data.length);
			console.log(data.toString());
		}))
		
	
	    
	    
});
	
	

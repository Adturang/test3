var express = require('express');
var cors=require('cors');
var app = express();
var bodyParser = require('body-parser');

const registrationMap=new Map();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors());
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    console.log(__dirname)
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get',cors(), function (req, res) {
   // Prepare output in JSON format
   response = {
      first_Name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/register',cors(),function(req,res){
	response = {
	userName:req.body.email,
	password:req.body.password
	};
	registrationMap.set(req.body.email,req.body.password);
	console.log("Called",response);
	let text = "";
	registrationMap.forEach (function(value, key) {
	console.log(key + ' = ' + value);
		})

console.log("Request",req.body,req.body.email);
	res.end(JSON.stringify(response));	
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
var y=5;
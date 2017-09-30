const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const c = console.log;


app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/index.html");
})



app.listen(port,(err)=>{
	err?c("err:",err):c("listening on:",port);
})
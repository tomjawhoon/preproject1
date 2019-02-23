var express = require('express');
var path = require('part');
var app = express();

app.get('/',function(req, res){
    res.JSON({res: 'hello world'});
});

app.get('/submit',function(req, res){
    res.sendFile(part.join(__dirname,''));
});

var server = app.listen(3000,function()){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s",host,port);
});
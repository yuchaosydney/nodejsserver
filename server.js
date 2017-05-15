var express = require('express');
var app = express();


app.use(express.static(__dirname));
// app.get('/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" );
// })

app.get('/',function(req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});

var express = require('express');
var cfenv = require('cfenv');

var app = express();
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

var appEnv = cfenv.getAppEnv();

app.get('/', function(req, res) {
    	res.render('public/index.html');
});

app.get('/cv', function(req, res) {
    	res.render('public/cv.html');
});

app.get('/projects', function(req, res) {
    	res.render('public/projects.html');
});

app.listen(appEnv.port, '0.0.0.0', function() {
  	console.log("server starting on " + appEnv.url);
});

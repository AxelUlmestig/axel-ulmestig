var express = require('express');

var app = express();
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('public/index.html'));

app.get('/cv', (req, res) => res.render('public/cv.html'));

app.get('/projects', (req, res) => res.render('public/projects.html'));

var port = 1338;
app.listen(port, () => console.log("server starting on port:", 1338));

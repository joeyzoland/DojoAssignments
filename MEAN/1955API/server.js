var express = require('express');
var app = express();

var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + "/client/static"));
app.set("views", __dirname + "/client/views");
app.set("view engine", 'ejs');
app.use(bodyParser.json()); 
require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js')(app);

app.listen(8000);

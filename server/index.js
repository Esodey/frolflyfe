var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controllers = require('../database-mongo/controllers.js');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/scores', (req, res) => {
  controllers.insertMany(req.body, (err) => {
		if (err) {
			res.sendStatus(500);
			return;
		}
		res.status(201).send(doc);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/sayHello', function(req, res, next){
    res.send('Hello' + req.body.name);
});

app.listen(3000);
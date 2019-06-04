const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.post('/mydata', function(req, res, next){
    var name = req.body.name;
    var age = req.body.age;
    var dept = req.body.dept;
    res.json({ name: name, age: age, dept: dept});
});

app.listen(3000);
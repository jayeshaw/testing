const express = require('express');
const app = express();

app.get('/random', function(req, res, next){
    res.send(""+ Math.random());
    res.end;
});

app.listen(3000);

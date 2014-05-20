var express= require('express'),
    path= require('path'),
    bodyParser = require('body-parser'),
    gson = require('express-gson'),
    app= express();

app.use(bodyParser());
app.use(gson());

app.post('/data',function (req, res)
{
  console.log(req.body) // populated!
  res.send(req.body); // encoded!
});

app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(8080);

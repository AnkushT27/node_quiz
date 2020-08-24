var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',(req,res)=>{
    res.send({message:"Hello from Quiz app"})
    
})



app.listen(3000);






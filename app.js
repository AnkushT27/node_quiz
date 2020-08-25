var express = require('express');
var bodyParser = require('body-parser');
var db = require('./utils/db')
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({message:req.body.message})
    
})

db.MongoDb((response)=>{
console.log(response)
app.listen(3000);
})







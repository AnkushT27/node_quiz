var express = require('express');
var bodyParser = require('body-parser');
var db = require('./utils/db');
var authUserRoute = require('./routes/auth')
let User = require('./models/users')
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(authUserRoute)


db.MongoDb((response)=>{
console.log(response)
app.listen(3000);
})







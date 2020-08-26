var express = require('express');
var bodyParser = require('body-parser');
var db = require('./utils/db');
var authUserRoute = require('./routes/auth')

let User = require('./models/users')
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
  
db.MongoDb((response)=>{
app.listen(3000);
})


app.use(authUserRoute)

app.use((err,req,res,next)=>{
    console.log('now is errrormiddl',err.statusCode)
    const status = err.statusCode || 500
    if(err){
        res.status(status).json({
            message:err.message
        })
    }
});








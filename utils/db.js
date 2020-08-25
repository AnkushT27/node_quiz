const mongoose = require('mongoose')
let dbs

exports.MongoDb = async function(cb) {
    try{
let MongoConnection =await mongoose.connect('mongodb+srv://mongo:mongo@123@cluster0.6sdhd.mongodb.net/quiz?retryWrites=true&w=majority',{useNewUrlParser:true})
cb(MongoConnection)
}
catch(error){
    console.log('My err',error)
    cb(error)
}
}





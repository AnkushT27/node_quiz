const User = require('../models/users');

exports.addUser = async (req,res,next)=>{
    let addedUser =  await new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).save()
    if(addedUser){
        res.status(201).send(addedUser)
    }
}

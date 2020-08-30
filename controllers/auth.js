const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
exports.login = async (req,res,next)=>{
  let user = await User.findOne({email:req.body.email})
  if(!user){
      res.staus(404).send({"message":"User Not Found"})
  }
  else{
      let isValidPassword = await bcrypt.compare(req.body.password,user.password)
      if(isValidPassword){
        const token = jwt.sign({
            id : user._id
        },'quiztoken',{expiresIn:'1h'})
        res.status(200).json({
            token:token
        })
      }
      else{
          const err = new Error('Password does not match')
          err.statusCode = 401
          next(err)
      }
  }
}

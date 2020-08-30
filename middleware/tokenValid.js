const jwt = require('jsonwebtoken');

exports.auth = (req,res,next)=>{
    const token = req.get('Authorization').split(' ')[1]
    if(!token){
        const err = new Error('Unauthorized')
        err.StatusCode = 401
        next(err)
    }
    const isValid = jwt.verify(token,'quiztoken')
    if(!isValid){
        const err = new Error('Invalid token')
        err.StatusCode = 401
        next(err)
    }
    else{
        req.id = isValid.id
        next()
    }
}
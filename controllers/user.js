const User = require('../models/users');
const bcrypt = require('bcryptjs');
exports.addUser = async (req, res, next) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        res.status(404).send({"message":"User Already Found"})
    } else {
        let hashPassword = await bcrypt.hash(req.body.password,12)
        let addedUser = await new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        }).save()
        if (addedUser) {
            res.status(201).send(addedUser)
        }
    }



}

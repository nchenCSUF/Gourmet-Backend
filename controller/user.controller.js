const user = require('../model/user.model');

exports.createUser = (req, res, next) => {
    console.log(req)
    const {id,email,firstName, lastName, type, preference, fav} = req.body;
    const item = new user({
        id,email,firstName, lastName, type, preference, fav
    });
    item.save();
    res.status(200).json({'msg': 'User added'});
}

exports.getUser = (req, res, next) => {
    id = req.query.id;
    console.log(req)
    user.find({"email":id},(err, data) => {
        if(err) {
           console.error(err)
        }
        console.log(data, "getuser data")
        res.send({"msg":data});
    });
   
}

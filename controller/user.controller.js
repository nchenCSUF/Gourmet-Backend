const user = require('../model/user.model');
const mongoose = require('mongoose');
exports.createUser = (req, res, next) => {
    console.log(mongoose)
    const {id,email,firstName, lastName, type, preference, fav} = req.body;
    const item = new user({
        id,email,firstName, lastName, type, preference, fav
    });
    console.log("Item: " , item);
    msg="saved";

    item.save(function (err,data) {
        if (err) {
            msg = "error" + err
        }
        console.log("res", res);
        res.status(200).json({'msg': msg});
      });
    
}

exports.getUser = (req, res, next) => {
    id = req.query.id;
    console.log("sign in request" , req)
    user.find({"email":id},(err, data) => { 
        if(err) {
           console.error(err)
        }
        console.log(data, "getuser data")
        res.send({"msg":data});
    });
   
}

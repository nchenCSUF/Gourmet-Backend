const user = require('../model/user.model');

exports.createUser = (req, res, next) => {
    console.log(req)
    const {id,email,firstName, lastName, type, preference, fav} = req.body;
    const item = new user({
        id,email,firstName, lastName, type, preference, fav
    });
    msg="saved"
    item.save(function (err) {
        if (err) {
            msg = "error" + err
        }
      });
    res.status(200).json({'msg': msg});
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

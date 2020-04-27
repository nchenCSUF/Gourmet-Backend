
const user = require('../model/user.model');
exports.getFavorite = (req, res, next) => {
    let id = req.query.id;
    user.find({"id": id },(err, data) => {
        if(err) {
           console.error(err)
        }
        res.send({"msg":data});
    });
}

exports.addFavorite = (req, res, next) => {
    let {id, fav} = req.body;
    user.update({"id": id}, {$push: {"fav": fav}});
}
const leftOver = require('../model/leftover.model');

exports.createLeftOver = (req, res, next) => {
    console.log("amisha ", req)
    const {restaurantName,foodType, serves, address, useBy, comments, id} = req.body;
    const item = new leftOver({
        restaurantName,foodType, serves, address, useBy, comments, id
    });
    item.save();
    res.status(200).json({'msg': 'Left Over food added'});
}

exports.getLeftOverFood = (req, res, next) => {
    leftOver.find({},(err, data) => {
        if(err) {
           console.error(err)
        }
        console.log(data)
        res.send({"msg":data});
    });
   
}
exports.deleteFood = (req, res, next) => {
    console.log(req.query.id, "amisha")
    leftOver.deleteOne({"id": req.query.id, "useBy": req.query.useBy}, (err) => { 
        if(err) {
            console.error(err)
         }
         res.send({"msg":"deleted"});
    })
}
exports.getLeftOverFoodbyId = (req, res, next) => {
    let id = req.query.id;
    leftOver.find({"id": id},(err, data) => {
        if(err) {
           console.error(err)
        }
        console.log(data)
        res.send({"msg":data});
    });
   
}

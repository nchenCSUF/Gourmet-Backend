const leftOver = require('../model/leftover.model');

exports.createLeftOver = (req, res, next) => {
    console.log("amisha ", req)
    const {restaurantName,foodType, serves, address, useBy} = req.body;
    const item = new leftOver({
        restaurantName,foodType, serves, address, useBy
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

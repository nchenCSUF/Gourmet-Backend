const request = require('request');
const authHeader = 'Bearer WdMlzizMaL5u0D3bCUfPvfsk-4v8VmjMzZhhn-2Vq0P5j1gwtx9VDWtTidi18LqkT2uJ2gbbsw63yByVjcp19Wv_jLcAkrvW2fukofv-wgkBLhMNmRX01xAQimJiXHYx';

exports.getRestaurantsList = (reqM, resM, nextM) => {
    // call yelp api
    //request.header.authorization = 'Bearer WdMlzizMaL5u0D3bCUfPvfsk-4v8VmjMzZhhn-2Vq0P5j1gwtx9VDWtTidi18LqkT2uJ2gbbsw63yByVjcp19Wv_jLcAkrvW2fukofv-wgkBLhMNmRX01xAQimJiXHYx';
    getRestaurantApi = "https://api.yelp.com/v3/businesses/search?term=" + reqM.query.searchValue + "&latitude=" +reqM.query.lat + "&longitude="+ reqM.query.longi;
    request(getRestaurantApi, {json:true}, (err, res, body) => {
        resM.send({"msg":body}); 
    }).setHeader('authorization', authHeader )   
}
exports.getReviews = (reqM, resM, nextM) => {
    id = reqM.query.id;
    getReviewsApi = 'https://api.yelp.com/v3/businesses/' + id  + '/reviews';
    request(getReviewsApi,{json:true},(err,res,body) => {
        resM.send({"data": body});
    }).setHeader('authorization', authHeader);
}

exports.getRestaurant = (reqM, resM, nextM) => {
    getRestaurantApi = "https://api.yelp.com/v3/businesses/" + reqM.query.id;
    request(getRestaurantApi, {json:true}, (err, res, body) => {
        resM.send({"msg":body}); 
    }).setHeader('authorization', authHeader )   
}
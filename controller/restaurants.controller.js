const request = require('request');
const authHeader = 'Bearer WdMlzizMaL5u0D3bCUfPvfsk-4v8VmjMzZhhn-2Vq0P5j1gwtx9VDWtTidi18LqkT2uJ2gbbsw63yByVjcp19Wv_jLcAkrvW2fukofv-wgkBLhMNmRX01xAQimJiXHYx';
const getRestaurantApi = 'https://api.yelp.com/v3/businesses/search?location=nutwood ave fullerton';
const getReviewsApi = 'https://api.yelp.com/v3/businesses/E950qgee4B4qbvkOmEPWEA/reviews';

exports.getRestaurantsList = (reqM, resM, nextM) => {
    // call yelp api
    //request.header.authorization = 'Bearer WdMlzizMaL5u0D3bCUfPvfsk-4v8VmjMzZhhn-2Vq0P5j1gwtx9VDWtTidi18LqkT2uJ2gbbsw63yByVjcp19Wv_jLcAkrvW2fukofv-wgkBLhMNmRX01xAQimJiXHYx';
    request(getRestaurantApi, {json:true}, (err, res, body) => {
        resM.send({"msg":body}); 
    }).setHeader('authorization', authHeader )   
}

exports.getReviews = (reqM, resM, nextM) => {
    request(getReviewsApi,{json:true},(err,res,body) => {
        resM.send({"data": body});
    }).setHeader('authorization', authHeader);
}
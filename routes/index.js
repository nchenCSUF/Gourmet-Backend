const route = require('express').Router();
const {getAllApis} = require('../controller/api.controller');
const {checkValidation} = require('../controller/signin.controller')
const {getRestaurantsList} = require('../controller/restaurants.controller')
const {getReviews} = require('../controller/restaurants.controller')
const{ getLeftOverFood, createLeftOver} = require('../controller/leftover.controller')
const { createUser,getUser } = require('../controller/user.controller')

route.get('/', getAllApis);
route.route('/signin').post(checkValidation);
route.route('/getrestaurantslist').get(getRestaurantsList);
route.route('/getreviews').get(getReviews);
route.route('/getleftoverdetails').get(getLeftOverFood);
route.route('/createleftover').post(createLeftOver);
route.route('/createuser').post(createUser);
route.route('/getuser').get(getUser);

module.exports = route;
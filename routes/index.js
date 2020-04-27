const route = require('express').Router();
const {getAllApis} = require('../controller/api.controller');
const {checkValidation} = require('../controller/signin.controller')
const {getRestaurantsList, getRestaurant} = require('../controller/restaurants.controller')
const {getReviews} = require('../controller/restaurants.controller')
const{ getLeftOverFood, createLeftOver, getLeftOverFoodbyId, deleteFood} = require('../controller/leftover.controller')
const { createUser,getUser } = require('../controller/user.controller')
const { getFavorite, addFavorite } = require('../controller/favorite.controller')

route.get('/', getAllApis);
route.route('/signin').post(checkValidation);
route.route('/getrestaurantslist').get(getRestaurantsList);
route.route('/getrestaurant').get(getRestaurant);
route.route('/getreviews').get(getReviews);
route.route('/getleftoverdetails').get(getLeftOverFood);
route.route('/getleftoverdetailsbyId').get(getLeftOverFoodbyId);
route.route('/createleftover').post(createLeftOver);
route.route('/deletefood').delete(deleteFood);
route.route('/createuser').post(createUser);
route.route('/getuser').get(getUser);
route.route('/getfavorite').get(getFavorite);
route.route('/addfavorite').put(addFavorite);

module.exports = route;
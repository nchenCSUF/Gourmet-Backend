const mongoose = require('mongoose');
const leftOverSchema = new mongoose.Schema({
    restaurantName: String,
    foodType: String,
    serves: Number,
    address: String,
    useBy: String,
    comments: String,
    id: String
});

module.exports = mongoose.model('left-over-food', leftOverSchema);
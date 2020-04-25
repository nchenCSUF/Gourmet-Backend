const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    id: Number,
    email: String,
    firstName: String,
    lastName:String,
    type: String,
    preference: String,
    fav: String
});

module.exports = mongoose.model('user', UserSchema);
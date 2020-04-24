const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
// const connect = require('./model/connect')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gourmet:gourmet@cluster0-vr9mv.mongodb.net/gourmet-db?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true }
)
 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('we are connected')
});
   

const app = express();
app.use(bodyParser.json({limit:'50mb'}));
app.use(cors());
app.use(helmet());
// setting the routes
app.use('/api', routes);

module.exports = app;

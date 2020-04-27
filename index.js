const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
// const connect = require('./model/connect')
const mongoose = require('mongoose');

mongoose.connect('mongodb://gourmetdb:LhIU7IBZKsdJKz1cjP4iITDQW3FYKgGxOQq4pbo9ZZi99eVms3tiMLm9Gmd8hP5sBz3Lx2DCZ3qhHptZgaNSCw==@gourmetdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gourmetdb@',{ useUnifiedTopology: true, useNewUrlParser: true }
)
//mongodb+srv://gourmet:gourmet@cluster0-vr9mv.mongodb.net/gourmet-db?retryWrites=true&w=majority'
 //mongodb://gourmetdb:LhIU7IBZKsdJKz1cjP4iITDQW3FYKgGxOQq4pbo9ZZi99eVms3tiMLm9Gmd8hP5sBz3Lx2DCZ3qhHptZgaNSCw==@gourmetdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gourmetdb@
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

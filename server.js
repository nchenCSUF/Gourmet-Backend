const app = require('./index');
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app started: ', + port);
});
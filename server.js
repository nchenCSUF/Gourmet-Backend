const app = require('./index');
var port = process.env.PORT || 3008;
app.listen(port, () => {
    console.log('app started: ', + port);
});
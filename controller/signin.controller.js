exports.checkValidation = (req, res, next) => {
    // token is at req.body.data => validate it
    token = req.body.data;
    res.status(200).json({'msg': 'Valid login', 'status': true});
}
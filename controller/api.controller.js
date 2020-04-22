exports.getAllApis = (req, res, next) => {
    console.log('req is: ', req);
    res.status(200).json({msg:"hello"});
}
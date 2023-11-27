const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getDate();
    console.log(method,url,time);
    //without call this function will blocked
    next();
}
module.exports = logger;
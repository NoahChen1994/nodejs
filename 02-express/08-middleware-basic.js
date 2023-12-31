const express = require("express");
const app = express();
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getDate();
    console.log(method,url,time);
    //without call this function will blocked
    next();
}
app.get('/', logger, (req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})

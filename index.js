const express = require('express')
const app = express()
app.use(express.json());

let fun1 = (req, res, next) => {
    req.body.surname = "jain";
    req.body.detail = req.body.name + " " + req.body.surname;
    next();
}
let fun2 = (req, res, next) => {
    req.body.address = "vikasnagar 306 14/4 neemuch (m.p)";
   
    next();
}
let fun3 = (req, res, next) => {
    req.body.contactno = "000000000";
   
    next();
}
let fun4 = (req, res, next) => {
    req.body.email = "harshitajain2204@gmail.com";
   
    next();
}
app.post('/mydetail', fun1,fun2,fun3,fun4, function (req, res) {
    let n = req.body.name;
    let sn = req.body.surname;
    
    let detail = req.body.detail;
    res.send({
        details: detail,
        address: req.body.address,
        contact: req.body.contactno,
        email: req.body.email
     

    })
})

app.listen(3000)
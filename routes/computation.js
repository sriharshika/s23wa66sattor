var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var s1 = Math.floor(Math.random() * 10);
    var s2 = Math.floor(Math.random() * 10);
    var s3 = Math.floor(Math.random() * 10);
    var atanFunction = Math.atan(s1);
    var expFunction = Math.exp(s2);
    var expm1Function = Math.expm1(s3);
    res.render('computation',
                {
                    title: 'Sri Harshika Sattor working on computation ',
                    s1: s1,
                    s2: s2,
                    s3: s3,
                    atan : atanFunction,
                    exp : expFunction,
                    expm1 : expm1Function
                });
});
module.exports = router;
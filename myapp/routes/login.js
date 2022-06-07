var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    //res.json({name:"sushmit"})
     res.render('login');
  });

router.get('/getLogin', function(req, res, next) {
    console.log(req.query)
    res.send({name:"sushmit"})
  //res.render('teacher')
   
});
router.post('/getLogin', function(req, res, next) {
  console.log(req.body)
  //res.send({name:"sushmit"})
//res.render('teacher')
res.json({"name":req.body.password})
 
});

module.exports = router;
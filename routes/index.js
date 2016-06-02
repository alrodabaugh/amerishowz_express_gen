var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AmeriSHOWZ',
    page: 'index'
  });
});

router.get('/terms', function(req, res, next){
  res.render('legal', {
    title: 'Terms and Conditions ("Terms")',
    page: 'terms'
  });
});

router.get('/privacy', function(req, res, next){
  res.render('legal', {
    title: 'Privacy Policy',
    page: 'privacy'
  });
});

module.exports = router;

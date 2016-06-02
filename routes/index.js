var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AmeriSHOWZ',
    page: 'index',
    right: 'partials/content/mailchimp.ejs',
    left: 'partials/content/about.ejs'
  });
});

router.get('/opportunity', function(req, res, next) {
  res.render('index', {
    title: 'Opportunity',
    page: 'opportunity',
    right: 'partials/content/discover.ejs',
    left: 'partials/content/sayyes.ejs'
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

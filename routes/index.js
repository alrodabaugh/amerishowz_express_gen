var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

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

router.get('/success-stories', function(req, res, next) {
  var chAmps = [];
  chAmps = appdata.champs;

  res.render('lists', {
    title: 'Success Stories',
    page: 'success-stories',
    top: 'partials/content/champtop.ejs',
    bottom: 'partials/content/champs.ejs',
    champions: chAmps
  });
});

router.get('/training-events', function(req, res, next) {
  var evEnts = [];
  evEnts = appdata.events;

  res.render('lists', {
    title: 'Training Events',
    page: 'training-events',
    top: 'partials/content/eventstop.ejs',
    bottom: 'partials/content/events.ejs',
    events: evEnts
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

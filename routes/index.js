var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AmeriSHOWZ',
    page: 'index',
    one: 'partials/content/mailchimp.ejs',
    two: 'partials/content/about.ejs'
  });
});

router.get('/opportunity', function(req, res, next) {
  res.render('index', {
    title: 'Opportunity',
    page: 'opportunity',
    one: 'partials/content/discover.ejs',
    two: 'partials/content/sayyes.ejs'
  });
});

router.get('/success-stories', function(req, res, next) {
  var chAmps = [];
  chAmps = appdata.champs;

  res.render('index', {
    title: 'Success Stories',
    page: 'success-stories',
    one: 'partials/content/champtop.ejs',
    two: 'partials/content/champs.ejs',
    champions: chAmps
  });
});

router.get('/training-events', function(req, res, next) {
  var evEnts = [];
  evEnts = appdata.events;

  res.render('index', {
    title: 'Training Events',
    page: 'training-events',
    one: 'partials/content/eventstop.ejs',
    two: 'partials/content/events.ejs',
    events: evEnts
  });
});

router.get('/news', function(req, res, next) {
  res.render('single', {
    title: 'News',
    page: 'news',
    one: 'partials/content/news.ejs'
  });
});

router.get('/submit', function(req, res, next) {
  res.render('submit', {
    title: 'SUBMIT&trade;',
    page: 'submit',
    one: 'partials/content/submitpage.ejs'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('single', {
    title: 'Contact',
    page: 'contact',
    one: 'partials/content/contact.ejs'
  });
});

router.get('/login', function(req, res, next){
  res.render('single', {
    title: 'IBO Login',
    page: 'login',
    one: 'partials/content/login.ejs'
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

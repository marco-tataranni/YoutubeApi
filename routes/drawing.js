var express = require('express');
var router = express.Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyDLL38dBbaMesfyEVP1ep9svKX667zIxMs');
/* General drawing tutorial */
router.get('/', function(req, res, next) {
    youtube.searchVideos("drawing tutorial", 5)
    .then(results => {
        console.log(`The video's title is ${results[0].shortURL}`);
        //res.render('users', { title: 'Express', results });
        res.render('drawing',{results});
    })
    .catch(console.log);
  
});
/* Face drawing tutorial */
router.get('/face', function(req, res, next) {
    youtube.searchVideos("face drawing tutorial", 5)
    .then(results => {
        console.log(`The video's title is ${results[0].shortURL}`);
        //res.render('users', { title: 'Express', results });
        res.render('drawing',{results});
    })
    .catch(console.log);
  
});

/* male body drawing tutorial*/
router.get('/male', function(req, res, next) {
    youtube.searchVideos("male body drawing tutorial", 5)
    .then(results => {
        console.log(`The video's title is ${results[0].shortURL}`);
        //res.render('users', { title: 'Express', results });
        res.render('drawing',{results});
    })
    .catch(console.log);
  
});

/* female body drawing tutorial */
router.get('/famale', function(req, res, next) {
    youtube.searchVideos("female body drawing tutorial", 5)
    .then(results => {
        console.log(`The video's title is ${results[0].shortURL}`);
        //res.render('users', { title: 'Express', results });
        res.render('drawing',{results});
    })
    .catch(console.log);
  
});

module.exports = router;

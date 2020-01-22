var express = require('express');
var router = express.Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyDLL38dBbaMesfyEVP1ep9svKX667zIxMs');
/* GET users listing. */
router.get('/', function(req, res, next) {
    youtube.searchVideos('Centuries', 4)
    .then(results => {
        console.log(`The video's title is ${results[0].shortURL}`);
        //res.render('users', { title: 'Express', results });
        res.send({results});
    })
    .catch(console.log);
  
});

module.exports = router;

var express = require('express');
var router = express.Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCR9jegPSTKlSG7bqKuOebVm_Uka9no70o');

router.get('/', function(req, res, next) {
    youtube.searchVideos('Centuries', 4)
    .then(results => {
        console.log(`The video's title is ${results[0].title}`);
    })
    .catch(console.log);
  res.render('index', { title: 'Express' });
});

module.exports = router;

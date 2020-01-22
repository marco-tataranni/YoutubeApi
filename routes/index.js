var express = require('express');
var router = express.Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCR9jegPSTKlSG7bqKuOebVm_Uka9no70o');

router.get('/', function(req, res, next) {
   
  res.render('index', { title: '' });
});

module.exports = router;

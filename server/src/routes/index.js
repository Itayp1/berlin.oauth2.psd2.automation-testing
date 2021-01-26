const router = require('express').Router(),
oauth2 = require('./oauth2') ,
consent = require('./consent') ,
berlin = require('./berlin') ;


 
router.use('/oauth2', oauth2);
router.use('/consent', consent);
router.use('/berlin', berlin);

module.exports = router;

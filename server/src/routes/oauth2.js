const router = require('express').Router();
const Oauth2 = require('../services/Oauth2');
const logger = require('../loaders/logger');


router.get('/' , async (req, res, next) => {

  
  
  res.json("Oauth2");
});


module.exports = router;

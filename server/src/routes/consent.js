const router = require('express').Router();
const Consent = require('../services/Consent');
const logger = require('../loaders/logger');


router.get('/' , async (req, res, next) => {

  
  
  res.json("Consent");
});


module.exports = router;

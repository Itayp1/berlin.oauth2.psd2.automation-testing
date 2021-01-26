const router = require('express').Router();
const Berlin = require('../services/Berlin');
const logger = require('../loaders/logger');


router.get('/' , async (req, res, next) => {

  
  
  res.json("berlin");
});


module.exports = router;

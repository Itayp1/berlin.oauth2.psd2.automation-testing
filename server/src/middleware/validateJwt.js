const JsonWebToken = require('../services/JsonWebToken');
const logger = require('../loaders/logger');

module.exports = async (req, res, next) => {
  let { authorization } = req.headers;
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    authorization = authorization.split(' ')[1];
  }

  const jwtVerifucation = new JsonWebToken(authorization);
  try {
    const isValid = jwtVerifucation.verifyJwt();
    next();
  } catch (error) {
    logger.error(`invalid request bad jwt auth:${authorization}`);
    res.status(401).send({ status: error.message });
  }
};

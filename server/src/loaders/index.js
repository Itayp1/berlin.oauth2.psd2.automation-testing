 const   logger = require("./logger");



module.exports = async (app) => {
  require("./expressLoader")(app);
  logger.info("Express loaded!");

  

  // catch Uncaught error logging them
  require("./uncaughtException")();
};

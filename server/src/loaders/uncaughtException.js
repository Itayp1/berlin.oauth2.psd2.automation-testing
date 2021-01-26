/* eslint-disable no-undef */
const logger = require("./logger");

module.exports = () => {
  process
    .on("unhandledRejection", (reason) => {
      logger.error(`message:${reason.message || reason} stack:${reason.stack || null}`);
    })
    .on("uncaughtException", (err) => {
      logger.error(`message:${err.message || err} stack:${err.stack || null}`);
      //  / process.exit(1);
    });
  process.on("SIGINT", () => {
    process.exit();
  });
};

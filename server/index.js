const server = require("./server.js"),
  { PORT } = require("./server.config"),
  logger = require("./src/loaders/logger");

server.listen(PORT, () => {
  logger.info(`Server has started - port ${PORT}`);
});

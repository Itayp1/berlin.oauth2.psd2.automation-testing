/* eslint-disable no-undef */
const bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan'),
  helmet = require('helmet'),
  compression = require('compression'),
  isProduction = process.env.ENV === 'production',
  logger = require('./logger'),
  routes = require('../routes/index');

module.exports = (app) => {
  if (!isProduction) {
    app.use(morgan('tiny'));
  }

  // Health Check endpoints
  app.get('/health', (req, res) => {
    res.status(200).send({ status: 'UP' }).end();
  });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  //register other security protections
  app.use(helmet());
  //register gzip compression
  app.use(compression());

  app.use('/api', routes);
  /// catch 404 and forward to error handler
  app.use((req, res, next) => {

    res.status(404).send({status:"Not Found"})
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    logger.error(`message:${err.stack}`);
    // Any request to this server will get here, and will send an HTTP
    const status = err.status || 500;


    res.status(status).json({ status: err.message });
  });
};

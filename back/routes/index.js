const wilderRouter = require('./wilder.route');

const setupRoutes = (app) => {
  app.use('/', wilderRouter);
}

module.exports = setupRoutes
// Initializes the `rrAPI` service on path `/rr-api`
const { RrApi } = require('./rr-api.class');
const createModel = require('../../models/rr-api.model');
const hooks = require('./rr-api.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rr-api', new RrApi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rr-api');

  service.hooks(hooks);
};

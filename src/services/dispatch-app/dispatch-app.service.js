// Initializes the `Dispatch App` service on path `/rrAPI`
const { DispatchApp } = require('./dispatch-app.class');
const createModel = require('../../models/dispatch-app.model');
const hooks = require('./dispatch-app.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/rrAPI', new DispatchApp(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rrAPI');

  service.hooks(hooks);
};

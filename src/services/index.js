const dispatchApp = require('./dispatch-app/dispatch-app.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(dispatchApp);
};

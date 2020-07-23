const rrApi = require('./rr-api/rr-api.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rrApi);
};

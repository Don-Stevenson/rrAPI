const assert = require('assert');
const app = require('../../src/app');

describe('\'rrAPI\' service', () => {
  it('registered the service', () => {
    const service = app.service('rr-api');

    assert.ok(service, 'Registered the service');
  });
});

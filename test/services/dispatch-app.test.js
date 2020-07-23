const assert = require('assert');
const app = require('../../src/app');

describe('\'Dispatch App\' service', () => {
  it('registered the service', () => {
    const service = app.service('rrAPI');

    assert.ok(service, 'Registered the service');
  });
});

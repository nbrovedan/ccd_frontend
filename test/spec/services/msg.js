'use strict';

describe('Service: msg', function () {

  // load the service's module
  beforeEach(module('frontApp'));

  // instantiate service
  var msg;
  beforeEach(inject(function (_msg_) {
    msg = _msg_;
  }));

  it('should do something', function () {
    expect(!!msg).toBe(true);
  });

});

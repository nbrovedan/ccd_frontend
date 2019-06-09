'use strict';

describe('Service: ClienteService', function () {

  // load the service's module
  beforeEach(module('frontApp'));

  // instantiate service
  var ClienteService;
  beforeEach(inject(function (_ClienteService_) {
    ClienteService = _ClienteService_;
  }));

  it('should do something', function () {
    expect(!!ClienteService).toBe(true);
  });

});

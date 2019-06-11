'use strict';

describe('Service: PropostaService', function () {

  // load the service's module
  beforeEach(module('frontApp'));

  // instantiate service
  var PropostaService;
  beforeEach(inject(function (_PropostaService_) {
    PropostaService = _PropostaService_;
  }));

  it('should do something', function () {
    expect(!!PropostaService).toBe(true);
  });

});

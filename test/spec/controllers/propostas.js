'use strict';

describe('Controller: PropostasCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var PropostasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PropostasCtrl = $controller('PropostasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PropostasCtrl.awesomeThings.length).toBe(3);
  });
});

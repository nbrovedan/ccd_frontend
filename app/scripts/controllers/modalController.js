'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:ModalcontrollerCtrl
 * @description
 * # ModalcontrollerCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('ModalCtrl', ['$uibModalInstance','$scope','ClienteService','data','cliente',
                  function ($uibModalInstance,$scope,ClienteService,data,cliente) {
    $scope.proposta = data;

    ClienteService.getClienteById(cliente).then(function(cliente){
      $scope.cliente = cliente.data;
    });

    $scope.ok = function(){
      $uibModalInstance.close();
    }
  }]);

'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('ClientesCtrl', ['$scope', '$state','ClienteService', '$stateParams',
                     function ($scope, $state,ClienteService, $stateParams) {

    $scope.clientes = [];

    $scope.salvar = function(cliente){
      ClienteService.save(cliente).then(function(result){
          $state.go('main.clientes');
      });
    }

    $scope.remover = function(cliente){
      ClienteService.delete(cliente).then(function(result){
        $state.go('main.clientes', {id:undefined});
      });
    }

    function _init(){
      if($stateParams.id == undefined){
        ClienteService.getAll().then(function(result){
          $scope.clientes = result.data;
        });
      }else{
        ClienteService.getClienteById($stateParams.id).then(function(result){
          console.log(result.data);
          $scope.cliente = result.data;
        });
      }
    }

      _init();
  }]);

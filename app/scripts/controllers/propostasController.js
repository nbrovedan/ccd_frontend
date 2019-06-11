'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:PropostascontrollerCtrl
 * @description
 * # PropostascontrollerCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('PropostasCtrl',['$scope','$stateParams','propostas','proposta','PropostaService',
                               '$uibModal','$state','ClienteService',
                     function ($scope,$stateParams,propostas,proposta,PropostaService,$uibModal,
                               $state,ClienteService) {

    $scope.novaproposta = function(cliente){
        ClienteService.addProposta(cliente.codigo).then(function(result){
          $state.go('main.proposta', {cliente: cliente.codigo, id: result.data.codigo});
        });
    }

    function _init(){
      $scope.propostas = propostas;

      ClienteService.getClienteById($stateParams.cliente).then(function(result){
          $scope.cliente = result.data;
      });

      if($stateParams.id !== undefined){
          var modal = $uibModal.open({
              animation: true,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'propostasTemplate.html',
              controller: 'ModalCtrl',
              controllerAs: this,
              size: 120,
              resolve: {
                data: function () {
                  return proposta;
                },
                cliente: function(){
                  return $stateParams.cliente;
                }
              }
          });

          modal.result.then(function(){
            $state.go('main.propostas', {cliente: $stateParams.cliente});
          },
          function(){
              $state.go('main.propostas', {cliente: $stateParams.cliente});
          });
        }
      }

      _init();
  }]);

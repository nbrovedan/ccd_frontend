'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('ClientesCtrl', ['$scope','$state','clientes','ClienteService', '$stateParams','$ngConfirm',
                     function ($scope,$state,clientes,ClienteService, $stateParams,$ngConfirm) {

    $scope.salvar = function(cliente){
      ClienteService.save(cliente).then(function(result){
        if(cliente.codigo){
            $state.go('main.clientes');
        }else{
          ClienteService.addProposta(result.data.codigo).then(function(_result){
            $state.go('main.proposta', {cliente: result.data.codigo, id: _result.data.codigo});
          });
        }
      });
    }

    $scope.remover = function(cliente){
      $ngConfirm({
          title: 'Atenção!',
          content: 'Deseja realmente excluir esse cliente?',
          type: 'red',
          typeAnimated: true,
          columnClass: 'medium',
          buttons: {
              Sim: {
                  text: 'Sim',
                  btnClass: 'btn-red',
                  action: function(scope, button){
                      ClienteService.delete(cliente).then(function(result){
                        $ngConfirm('Cliente excluído com sucesso!');
                        $state.go('main.clientes', {id:undefined});
                      })
                      .catch(function(err){
                        $ngConfirm('Ocorreu um erro ao excluir o cliente!');
                      });
                  }
              },
              close: {
                text: 'Não'
              }
          }
      });
    }

    $scope.buscarCpf = function(buscar){
      ClienteService.getClienteByCpf(buscar.cpf).then(function(result){
        if(!result.data || result.length == 0){
          $ngConfirm('Nenhum cliente encontrado com esse CPF!');
        }else{
          $scope.clientes = [];
          $scope.clientes.push(result.data);
        }
      });
    }

    function _init(){
      $scope.clientes = clientes;
    }

      _init();
  }]);

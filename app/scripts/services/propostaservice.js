'use strict';

/**
 * @ngdoc service
 * @name frontApp.PropostaService
 * @description
 * # PropostaService
 * Service in the frontApp.
 */
angular.module('frontApp')
  .service('PropostaService', ['$http','Config', function ($http,Config) {
    var _getAllByCliente = function (cliente) {
        return $http.get( Config.serverUrl + '/clientes/' + cliente + '/propostas');
    };

    var _getClienteByClienteAndCodigo = function (cliente, codigo) {
        return $http.get( Config.serverUrl + '/clientes/' + cliente + '/propostas/' + codigo);
    };

    return{
    	getAllByCliente: _getAllByCliente,
    	getAllByClienteAndCodigo: _getClienteByClienteAndCodigo
    };
  }]);

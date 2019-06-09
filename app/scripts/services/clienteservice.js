'use strict';

/**
 * @ngdoc service
 * @name frontApp.ClienteService
 * @description
 * # ClienteService
 * Service in the frontApp.
 */
angular.module('frontApp')
  .service('ClienteService', ['$http','Config', function ($http,Config) {
    var _getAll = function () {
        return $http.get( Config.serverUrl + '/clientes');
    };

    var _getClienteById = function (id) {
        return $http.get( Config.serverUrl + '/clientes/' + id);
    };

    var _save = function(cliente){
      if(cliente.codigo == undefined){
        return $http.post(Config.serverUrl + '/clientes', cliente);
      }else{
        return $http.put(Config.serverUrl + '/clientes/' + cliente.codigo, cliente);
      }
    }

    var _delete = function(cliente){
      return $http.delete(Config.serverUrl + '/clientes/' + cliente.codigo);
    }

    return{
    	getAll: _getAll,
    	getClienteById: _getClienteById,
      save: _save,
      delete : _delete
    };
  }]);

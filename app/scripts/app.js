'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('frontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMask',
    'idf.br-filters',
    'ui.bootstrap',
    'cp.ngConfirm',
    'angular-loading-bar'
  ])
  .config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            //controller: 'MainCtrl',
            abstract: true
        })
        .state('main.clientes', {
            url: '/clientes',
            resolve: {
              clientes : function(ClienteService){
                return ClienteService.getAll().then(function(result){
                  return result.data;
                });
              }
            },
            views: {
                'main': {
                    templateUrl: 'views/clientes.html',
                    controller: 'ClientesCtrl',
                }
            }
        })
        .state('main.novo-cliente', {
            url: '/clientes/adicionar',
            resolve: {
              clientes: function(){
                return {};
              }
            },
            views: {
                'main': {
                    templateUrl: 'views/clientes-formulario.html',
                    controller: 'ClientesCtrl'
                }
            }
        })
        .state('main.editar-cliente', {
            url: '/clientes/:id/editar',
            resolve: {
              clientes : function($stateParams, ClienteService){
                return ClienteService.getClienteById($stateParams.id).then(function(result){
                  return result.data;
                });
              }
            },
            views: {
                'main': {
                    templateUrl: 'views/clientes-formulario.html',
                    controller: 'ClientesCtrl'
                }
            }
        })
        .state('main.propostas', {
            url: '/clientes/:cliente/propostas',
            resolve: {
              propostas: function($stateParams,PropostaService){
                return PropostaService.getAllByCliente($stateParams.cliente).then(function(propostas){
                  return propostas.data;
                });
              },
              proposta: function(){
                return {}
              }
            },
            views: {
                'main': {
                    templateUrl: 'views/propostas.html',
                    controller: 'PropostasCtrl'
                }
            }
        })
        .state('main.proposta', {
            url: '/clientes/:cliente/propostas/:id',
            resolve: {
              propostas: function($stateParams,PropostaService){
                return PropostaService.getAllByCliente($stateParams.cliente).then(function(propostas){
                  return propostas.data;
                });
              },
              proposta: function($stateParams,PropostaService){
                return PropostaService.getAllByClienteAndCodigo($stateParams.cliente,$stateParams.id).then(function(proposta){
                  return proposta.data;
                });
              }
            },
            views: {
                'main': {
                    templateUrl: 'views/propostas.html',
                    controller: 'PropostasCtrl'
                }
            }
        })
        .state('main.proposta-cpf', {
            url: '/propostas',
            resolve: {
              clientes: function(){
                return {};
              }
            },
            views: {
                'main': {
                    templateUrl: 'views/propostas-cpf.html',
                    controller: 'ClientesCtrl'
                }
            }
        })
        .state('page', {
          url: '/page',
          templateUrl: 'views/page.html',
          abstract: true
        })
        .state('page.login', {
            url: '/login',
            title: 'Login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        });
      $urlRouterProvider.otherwise('/main/clientes');
  }])
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.interceptors.push('tokenInterceptor');
  }]);

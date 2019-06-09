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
    'idf.br-filters'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            //controller: 'MainCtrl',
            abstract: true
        })
        .state('main.clientes', {
            url: '/clientes',
            views: {
                'main': {
                    templateUrl: 'views/clientes.html',
                    controller: 'ClientesCtrl'
                }
            }
        })
        .state('main.novo-cliente', {
            url: '/clientes/adicionar',
            views: {
                'main': {
                    templateUrl: 'views/clientes-formulario.html',
                    controller: 'ClientesCtrl'
                }
            }
        })
        .state('main.editar-cliente', {
            url: '/clientes/:id/editar',
            views: {
                'main': {
                    templateUrl: 'views/clientes-formulario.html',
                    controller: 'ClientesCtrl'
                }
            }
        })
        .state('main.avaliacoes', {
            url: '/avaliacoes',
            views: {
                'main': {
                    templateUrl: 'views/avaliacoes.html',
                    controller: 'ChefsCtrl'
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
  }]);

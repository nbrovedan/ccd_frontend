'use strict';

angular.module('frontApp')
.factory('tokenInterceptor',['$injector','$q',function($injector,$q) {
    return {
        request: function (config) {
            return config;
        },

        requestError: function(rejection) {
            return $q.reject(rejection);
        },

        response: function (response) {
            return response || $q.when(response);
        },

        responseError: function(rejection) {
            return $q.reject(rejection);
        }
    };
}]);

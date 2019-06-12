'use strict';

/**
 * @ngdoc service
 * @name frontApp.Config
 * @description
 * # Config
 * Service in the frontApp.
 */
angular.module('frontApp')
  .service('Config', function () {
    return {
        serverUrl: 'http://localhost:8888',
        pass: '9JAFMBrfLS6qCm&c6CgpA0Wq1&U3MsK#VxGr4p8U@Rr#mqjx=='
    };
  });

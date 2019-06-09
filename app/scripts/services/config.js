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
        //serverUrl: 'http://127.0.0.1:8800',
        //serverUrl: 'http://10.17.1.169:8181',
        //serverUrl: 'http://192.168.1.104:8181',
        //serverUrl: 'http://172.16.1.93:8181',
        //serverUrl: 'http://192.168.25.89:8181',
        //serverUrl: 'http://192.168.1.27:8181',
        //serverUrl: 'http://172.16.200.149:8181',
        pass: '9JAFMBrfLS6qCm&c6CgpA0Wq1&U3MsK#VxGr4p8U@Rr#mqjx=='
    };
  });

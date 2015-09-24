'use strict';

var MODULE_NAME = 'bLoader';
var angular = require('angular'),
    LoaderService = require('./service'),
    loaderController = require('./controller'),
    loaderInterceptor = require('./interceptor');

var app = angular .module(MODULE_NAME, []);

  app.service('loaderService', [function()
        {
          return new LoaderService();
        }
        ]);

  app.controller('loader', ['$scope', '$timeout', 'loaderService', loaderController]);

  app .factory('loaderRequestInterceptor', ['$q', 'loaderService', loaderInterceptor])
      .config(['$httpProvider', function($httpProvider)
      {
        $httpProvider.interceptors.push('loaderRequestInterceptor');
      }]);

module.exports = MODULE_NAME;

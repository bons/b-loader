'use strict';

require('angular');
require('angular-mocks');
var app = require('../lib/b-loader');

describe('Test Suite: b_loader', function()
{
  var scope,
      createController;

  beforeEach(angular.mock.module('b-loader'));

  beforeEach(angular.mock.inject(['$rootScope','$controller',
      function ($rootScope, $controller)
      {
        scope = $rootScope.$new();

        createController = function()
        {
          return $controller('sampleController',
            {
              '$scope': scope
            }
          );
        };
      }
    ])
  );

  it('should be defined', function()
  {
    expect(app).toBeDefined();
  });

  describe('Method: awesome', function()
  {
    it('should be awsome', function()
    {
      var controller = createController();
      expect(controller).toBeDefined();
      expect(scope.awesome()).toBe('awesome');
    });
  });

});

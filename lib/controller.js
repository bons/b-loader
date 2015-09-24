'use strict';

function loaderController($scope, $timeout, loaderService)
{
  $scope.isLoading = loaderService.isLoading;

  //This is for pages without page loader and prerender
  $timeout(function()
  {
    if(!loaderService.isLoading('page'))
    {
      window.prerenderReady = true;
    }
  }, 200);
}

module.exports = loaderController;

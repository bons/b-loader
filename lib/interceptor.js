'use strict';

function loaderInterceptor($q, loaderService)
{
  return {
    request : function(config)
    {
      if(config.withPageLoader)
      {
        loaderService.addLoader('page');
      }
      else if(config.withLoader)
      {
        loaderService.addLoader(config.withLoader);
      }

      return config;
    },

    response: function(response)
    {
      if(response.config.withPageLoader)
      {
        loaderService.removeLoader('page');
      }
      else if(response.config.withLoader)
      {
        loaderService.removeLoader(response.config.withLoader);
      }

      return response;
    },

    responseError: function(rejection)
    {
      if(rejection.config.withPageLoader)
      {
        loaderService.removeLoader('page');
      }
      else if(rejection.config.withLoader)
      {
        loaderService.removeLoader(rejection.config.withLoader);
      }

      return $q.reject(rejection);
     }
  };
}

module.exports = loaderInterceptor;

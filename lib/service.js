'use strict';
//Remove rootScope, check isLoading in removeloader

function LoaderService()
{
  var self = this;
  var loadersList = {};

  self.addLoader = function(type)
  {
    if(!loadersList.hasOwnProperty(type))
    {
      loadersList[type] = {
        isLoading : false,
        queue : 0
      };
    }

    loadersList[type].queue++;
    loadersList[type].isLoading = true;
  };

  self.removeLoader = function(type)
  {
    if(!loadersList.hasOwnProperty(type))
    {
      return;
    }

    loadersList[type].queue--;

    if(loadersList[type].queue < 0)
    {
      loadersList[type].queue = 0;
    }

    if(loadersList[type].queue  === 0)
    {
      loadersList[type].isLoading = false;

      if(type === 'page')
      {
        window.prerenderReady = true;
      }
    }
  };

  self.isLoading = function(type)
  {

    if(!loadersList.hasOwnProperty(type))
    {
      return false;
    }

    return loadersList[type].isLoading;
  };

}

module.exports = LoaderService;

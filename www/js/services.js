'use strict';

angular.module('mobile-accelerator-sample.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GameService', function($http) {
  return {
    all: function() {
      var config = {
        headers:  {
          "X-Parse-Application-Id": "KYWiL6Cb3I4hExAw0TgpM9OeW3qzoNxafEL7gdjr",
          "X-Parse-REST-API-Key": "KzpsUdS3P19KnklNQ2QcN8wqRwnMRK9zETYTRkrc"
        }
      };

      return $http.get("https://api.parse.com/1/classes/ListItem", config);
    },
    get: function(id) {
      // Simple index lookup
      return games[id];
    }
  };
});

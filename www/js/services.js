'use strict';

angular.module('mobile-accelerator-sample.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GameService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    { id: 0, name: 'Doom', tagLine: 'The original first person shooter' },
    { id: 1, name: 'Unreal Tournament', tagLine: 'Team shooter' },
    { id: 2, name: 'Diablo II', tagLine: 'A Blizzard classic' },
    { id: 3, name: 'Elite', tagLine: 'Early space sim' }
  ];

  return {
    all: function() {
      return games;
    },
    get: function(id) {
      // Simple index lookup
      return games[id];
    }
  };
});

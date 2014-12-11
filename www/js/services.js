'use strict';

angular.module('mobile-accelerator-sample.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GameService', function($ionicLoading, $http, $q) {
    function getAllGames() {
        var deferred = $q.defer();

        $ionicLoading.show({
            template: 'Loading...'
        });
        var config = {
            headers:  {
                "X-Parse-Application-Id": "KYWiL6Cb3I4hExAw0TgpM9OeW3qzoNxafEL7gdjr",
                "X-Parse-REST-API-Key": "KzpsUdS3P19KnklNQ2QcN8wqRwnMRK9zETYTRkrc"
            }
        };

        $http.get("https://api.parse.com/1/classes/ListItem", config)
            .success(function(data){
                $ionicLoading.hide();
               deferred.resolve(data);
            })
            .error(function(){
                $ionicLoading.hide();
                console.log('Error while making HTTP call.');
                deferred.reject();
            });

        return deferred.promise;
    }

    function getGame(id){
        // Simple index lookup
        return games[id];
    }

    return {
        all: getAllGames,
        get: getGame
    };
});

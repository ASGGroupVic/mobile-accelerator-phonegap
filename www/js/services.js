'use strict';

angular.module('mobile-accelerator-sample.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GameService', function($ionicLoading, $http, $q, DSCacheFactory) {
    self.gameListCache = DSCacheFactory.get("GameListCache");

    //This will refresh expired data, if no data available, it will put expired items back in cache
    self.gameListCache.setOptions({
       onExpire: function(key, value) {
           getAllGames()
               .then(function(){
                   console.log("Game List dta was automatically refreshed.", new Date());
               }, function() {
                   console.log("Error getting data. Putting expired items back", new Date());
                   self.gameListCache.put(key, value);
               });
       }
    });

    function getAllGames(forceRefresh) {
        if(typeof forceRefresh === "undefined") {
            forceRefresh = false;
        }
        var deferred = $q.defer(),
            cacheKey = "gameList",
            gameListData = null;

        if(!forceRefresh) {
            gameListData = self.gameListCache.get(cacheKey);
        }

        if(gameListData) {
            console.log("Found in cache", gameListData);
            deferred.resolve(gameListData);
        } else {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var config = {
                headers: {
                    "X-Parse-Application-Id": "KYWiL6Cb3I4hExAw0TgpM9OeW3qzoNxafEL7gdjr",
                    "X-Parse-REST-API-Key": "KzpsUdS3P19KnklNQ2QcN8wqRwnMRK9zETYTRkrc"
                }
            };

            $http.get("https://api.parse.com/1/classes/ListItem", config)
                .success(function (data) {
                    $ionicLoading.hide();
                    console.log("Received data via HTTP", data);
                    self.gameListCache.put(cacheKey, data);
                    deferred.resolve(data);
                })
                .error(function () {
                    $ionicLoading.hide();
                    console.log('Error while making HTTP call.');
                    deferred.reject();
                });
        }
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

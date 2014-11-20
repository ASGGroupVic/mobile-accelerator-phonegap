'use strict';

angular.module('mobile-accelerator-sample.controllers', [])


.controller('GameListCtrl', function($scope, GameService) {
  $scope.games = GameService.all();
})

.controller('GameStockistsCtrl', function($scope, $stateParams, GameService) {
  $scope.game = GameService.get($stateParams.id);
})

.controller('AccountCtrl', function($scope) {
});

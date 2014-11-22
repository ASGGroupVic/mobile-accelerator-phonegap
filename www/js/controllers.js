'use strict';

angular.module('mobile-accelerator-sample.controllers', ['ngCordova'])


  .controller('GameListCtrl', function ($scope, GameService) {
    $scope.games = GameService.all();
  })

  .controller('GameStockistsCtrl', function ($scope, $stateParams, GameService) {
    $scope.game = GameService.get($stateParams.id);
  })

  .controller('GamePhotoCtrl', function ($cordovaCamera) {
    var vm = this;

    vm.takePicture = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        //Success
        vm.imgSrc = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        alert('An error occured: ' + err);
      });
    };

    vm.selectPicture = function () {
      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      $cordovaCamera.getPicture(options).then(function (imageUri) {
        //Success
        vm.imgSrc = imageUri;

      }, function (err) {
        alert('An error occured: ' + err);
      });
    };
  });
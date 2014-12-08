// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

'use strict';

angular.module('mobile-accelerator-sample', ['ngCordova', 'ionic', 'mobile-accelerator-sample.controllers', 'mobile-accelerator-sample.services'])

.config( [
  '$compileProvider',
  function( $compileProvider )
  { 
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);

    //fix for wp8 mistaking ionic links for links to store apps
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
  }
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('gamelist', {
      url: '/game/list',
      templateUrl: 'templates/game-list.html',
      controller: 'GameListCtrl'
    })
    .state('gamephoto', {
      url: '/game/photo',
      templateUrl: 'templates/game-photo.html',
      controller: 'GamePhotoCtrl'
    });
    //
    //.state('game.stockists', {
    //  url: '/:id/stockists',
    //  templateUrl: 'templates/game-stockists.html',
    //  controller: 'GameStockistsCtrl'
    //});


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/game/list');

});


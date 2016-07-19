// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('tags', ['ionic'])

app.value('existingTags', []);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('taggerCtrl', ['$scope', 'existingTags', function($scope, existingTags){
  scope = $scope;
  /*scope.matchingTags = [];

  scope.openTagBox = function(){
    taggerPopup.createNewTags(scope);
  }

  scope.getTags = function(){
    if(scope.data.tag.length !== 0){
      var entry = scope.data.tag.length;
    }
    scope.matchingTags = [];
    for(var i = 0; i<existingTags.length; i++){
      var what = existingTags[i].slice(0, entry);
      if(scope.data.tag.match(new RegExp([what], 'i'))){
        scope.matchingTags.push(existingTags[i]);
      }
    }
  }

  scope.closeList = function(){
    scope.matchingTags = [];
  }*/

}])



angular.module('tags')
  .directive('createTags',['$timeout', function($timeout){

    return{
      scope: {
        currenttags: '&',
        suggestedtags: '&'
      },
      template: '<div>'+
                  '<div class="tag-result" ng-repeat="result in currentTags">{{result}}<i class="icon ion-close-round" ng-click="deleteTag(result)"></i></div>'+
                '</div>'+
                '<label class="item item-input item-floating-label">' +
                  '<span class="input-label">Tag</span>' +
                  '<input type="text" placeholder="Tag" ng-model="data.tag" ng-keyup="getSuggestedTags()" ng-keydown="saveTag()">' +
                '</label>' +
                '<ion-list>' +
                  '<ion-item ng-repeat="tag in matchingTags" ng-click="saveNewTag(tag)">' +
                    '{{tag}}' +
                  '</ion-item>' +
                '</ion-list>',
      link: function(scope, element) {
        scope.data = {};
        scope.matchingTags = [];
        scope.currentTags = scope.currenttags();
        scope.suggestedTags = scope.suggestedtags();
        //displays the suggested tags based on user input
        scope.getSuggestedTags = function() {
          if(scope.data.tag){
            if(scope.data.tag.length !== 0){
              var entry = scope.data.tag.length;
            }
            scope.matchingTags = [];
            for(var i = 0; i<scope.suggestedTags.length; i++){
              var what = scope.suggestedTags[i].slice(0, entry);
              if(scope.data.tag.match(new RegExp([what], 'i'))){
                scope.matchingTags.push(scope.suggestedTags[i])
              }
            }
          }
        }
        //Saves tag when enter key is pressed unless tag already exists and then it flashes the existing tag
        scope.saveTag = function(){
          if(event.keyCode === 13){
            scope.saveAllTags(scope.data.tag);
          }
        }
        //Saves a new tag if a suggested tag is used
        scope.saveNewTag = function(tag){
          scope.saveAllTags(tag);
        }
        //Delete a tag from currentTags
        scope.deleteTag = function(tag){
          var index = scope.currentTags.indexOf(tag);
          if(index > -1){
            scope.currentTags.splice(index, 1);
          }
        }
        scope.saveAllTags = function (tag){
          if(scope.currentTags.indexOf(tag) === -1){
            scope.currentTags.push(tag);
          }else{
            var elements = document.getElementsByClassName("tag-result");
            var index = scope.currentTags.indexOf(tag);
            elements[index].style.backgroundColor = "#387ef5";
            $timeout(function(){
              elements[index].style.backgroundColor = "#f7f7f7";
            }, 1000);
          }
          scope.data = {};
          scope.matchingTags = [];
        }
      }
    }
  }])

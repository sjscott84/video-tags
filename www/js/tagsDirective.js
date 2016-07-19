angular.module('tags')
  .directive('createTags', function(){
    return{
      scope: {
        currenttags: '&',
        suggestedtags: '&'
      },
      template: '<label class="item item-input item-floating-label">' +
                  '<span class="input-label">Tag</span>' +
                  '<input type="text" placeholder="Tag" ng-model="data.tag" ng-keyup="getSuggestedTags()">' +
                '</label>' +
                '<ion-list>' +
                  '<ion-item ng-repeat="tag in matchingTags" ng-click="data.tag=tag; closeList()">' +
                    '{{tag}}' +
                  '</ion-item>' +
                '</ion-list>',
      link: function(scope) {
        scope.data = {};
        scope.matchingTags = [];
            scope.getSuggestedTags = function() {
              //console.log(scope.data.tag);
              var currentTags = scope.currenttags();
              var suggestedTags = scope.suggestedtags();
              console.log(currentTags+' '+suggestedTags);
              //scope.tags();
            }
          }
    }
  })

angular.module('tags')
  .directive('createTags', function(){
    return{
      scope: {},
      template: '<label class="item item-input item-floating-label">' +
                  '<span class="input-label">Tag</span>' +
                  '<input type="text" placeholder="Tag" ng-model="data.tag" ng-keyup="getSuggestedTags()">' +
                '</label>' +
                '<ion-list>' +
                  '<ion-item ng-repeat="tag in matchingTags" ng-click="data.tag=tag; closeList()">' +
                    '{{tag}}' +
                  '</ion-item>' +
                '</ion-list>',
      link: function(scope, element, attrs) {
          scope.data = {};
          scope.matchingTags = [];
              scope.getSuggestedTags = function(suggestedTags) {
                console.log(scope.data.tag);
              }
            }
    }
  })

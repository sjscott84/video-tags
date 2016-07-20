angular.module('tags')
  .directive('createTags', function(){
    return{
      scope: {
        currenttags: '&',
        suggestedtags: '&'
      },
      template: '<div>'+
                  '<div class="tag-result" ng-repeat="result in currentTags">{{result}}<i class="icon ion-close-round"></i></div>'+
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
      link: function(scope) {
        scope.data = {};
        scope.matchingTags = [];
        scope.currentTags = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven'];
        //displays the suggested tags based on user input
        scope.getSuggestedTags = function() {
          //scope.currentTags = scope.currenttags();
          var suggestedTags = scope.suggestedtags();
          if(scope.data.tag.length !== 0){
            var entry = scope.data.tag.length;
          }
          scope.matchingTags = [];
          for(var i = 0; i<suggestedTags.length; i++){
            var what = suggestedTags[i].slice(0, entry);
            if(scope.data.tag.match(new RegExp([what], 'i'))){
              scope.matchingTags.push(suggestedTags[i])
            }
          }
        }
        //Saves tag when enter key is pressed
        scope.saveTag = function(){
          if(event.keyCode === 13){
            if(scope.currentTags.indexOf(scope.data.tag) === -1){
              scope.currentTags.push(scope.data.tag);
            }else{
              alert('You already have this tag');
            }
            scope.data = {};
          }
        }
        //Saves a new tag if a suggested tag is used
        scope.saveNewTag = function(tag){
          if(scope.currentTags.indexOf(tag) === -1){
            scope.currentTags.push(tag);
          }else{
            alert('You already have this tag')
          }
          scope.data = {};
          scope.matchingTags = [];
        }
      }
    }
  })

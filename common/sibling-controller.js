
angular.module('myApp')
.controller('siblingCtrl', ['$scope','userService', function(scope, userService) {
    scope.siblingName = 'Sibling';
    scope.$on('childName', function(event, data) {
        scope.siblingData = data;
    });
}]);
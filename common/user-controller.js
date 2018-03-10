
angular.module('myApp')
.value("appTitle",'My Angular Application')
.constant("myConstant", 20)
.controller('userCtrl', ['$scope','userService','appTitle','myConstant', function(scope, userService, appTitle, myConstant) {
    scope.$on('eventBroadcastedName', function(event, data) {
        scope.testName = data.message;
    });
    scope.myValue = appTitle;
    scope.myConstant = myConstant;
    scope.childName;
    scope.myFunc = function(data) {
        scope.childName = data;
        scope.$emit('childName', {message: scope.childName});
        scope.serviceData = userService;
    };
}]);
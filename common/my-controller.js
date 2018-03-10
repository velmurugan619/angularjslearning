angular.module('myApp').factory('siblingService', function() {
    var myfactoryData = 'factory data';
    return myfactoryData;
 });

angular.module('myApp')
.controller('myCtrl',['$scope','userService', function(scope, userService) {
    scope.displayName = 'default Name';
    scope.eventName;
    scope.serviceData;
    scope.myFunc = function(data) {
        scope.eventName = data;
        scope.$broadcast('eventBroadcastedName', {message: scope.eventName});
        scope.serviceData = userService.myFunction(scope.eventName);
        userService.userData().then(function(response){
            console.log(response[0].data);
            console.log(response[1].data);
            scope.userData = response[0].data;
     },function(err){
          console.log(err);
     });
    };
    
    scope.$on('childName', function(event, data) {
        scope.childNameData = data.message;
    });
}]);
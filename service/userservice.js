

// angular.module('myApp').factory('factoryService', function() {
//     var myfactoryData = 'factory data';
//     return myfactoryData;
//  });


// angular.module('myApp').service('userService','$rootScope', function(rootScope){
//     this.myFunction = function (data) {
//         // var mydata = data + factoryService + 'service data';
//         rootScope.$broadcast('childName', {message: data});
//         return mydata;
//     }
// });


angular.module('myApp')
    .service('userService', function ($rootScope, $http,$q) {
            this.myFunction =  function (data) {
                $rootScope.$broadcast("childName", data);
        }
        
        this.userData = function() {
            return $q.all([$http.get('https://www.w3schools.com/angular/customers.php'),$http.get('https://www.w3schools.com/angular/customers.php')]);
        }
    });
    


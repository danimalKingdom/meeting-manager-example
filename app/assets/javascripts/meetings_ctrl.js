(function() {
  "use strict";

  angular.module("app").controller('meetingsCtrl', function($scope, $http){
    $scope.message = "hello world";
    $scope.setUp = function(){
      $http.get('/api/v1/meetings.json').then(function(response){
        $scope.meetings = response.data;
      });
    };
  });

}());
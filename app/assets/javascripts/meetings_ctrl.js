(function() {
  "use strict";

  angular.module("app").controller('meetingsCtrl', function($scope, $http){

    $scope.setUp = function(){
      $http.get('/api/v1/meetings.json').then(function(response){
        $scope.meetings = response.data;
      });
    };

    $scope.changeOrderAttribute = function(attribute){
      if(attribute !== $scope.orderAttribute){
        $scope.orderDescending = false;
      } else {
        $scope.orderDescending = !$scope.orderDescending;
      }

      $scope.orderAttribute = attribute;
    };
  });

}());
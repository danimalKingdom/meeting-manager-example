(function() {
  "use strict";

  angular.module("app").controller('meetingsCtrl', function($scope, $http){

    $scope.setUp = function(){ 
      $http.get('/api/v1/meetings.json').then(function(response){
        $scope.meetings = response.data;
      });
      $http.get('/api/v1/tags.json').then(function(response){
        $scope.tags = response.data;
      });
    };

    $scope.createMeeting = function(name, address, startTime, endTime, notes, tags){ 
      var params = {
        name: name,
        address: address,
        start_time: startTime,
        end_time: endTime,
        notes: notes,
        tags: tags
      };
      $http.post('/api/v1/meetings.json', params).then(function(response){
        console.log(response);
        $scope.meetings.push(response.data);
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

    $scope.toggleForm = function(){
      $scope.showForm = !$scope.showForm;
    };

    window.scope = $scope;

  });

}());
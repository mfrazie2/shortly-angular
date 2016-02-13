angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  $scope.addLink = function() {
    return Links.addLink($scope.link)
      .then(function(link) {
        $scope.link = link;
      });
  };
});

var app = angular.module('myWeddingApp', []);
app.controller('myController', function($scope, $http){
    $scope.bride = 'Tanvi Bhatia';
    $scope.groom = 'Rahul Raviprasad';
    $scope.scrollToElement = function(id){
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
          });
    }
});
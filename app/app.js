'use strict';

// Declare app level module which depends on views, and components
angular.module('formangular', [
  'myApp.view',
  'myApp.edit'
]).controller('MainCtrl',['$scope', '$http', function($scope, $http) {

    var mode = false;
    var profile = {
        role: '',
        firstName: '',
        lastName: '',
        birthDate: null,
        nationality: '',
        phone: '',
        gender: '',
        email: '',
        linkedin: '',
        website: '',
        description: ''
    };

    
    var config = {
        emailFormat : /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/
    };

    function getFullnameIfFilled(){
        return ( $scope.profile.firstName && $scope.profile.lastName) ?
            $scope.profile.firstName + ' ' + $scope.profile.lastName +'\'s ':
            "New User ";
    }

    function loadProfileFromUrl(){
        $http({
            method: 'GET',
            url: '/app/assets/json/profile.json'
        }).then(function successCallback(response) {
            $scope.profile = response.data;
        }, function errorCallback(response) {
            console.error(response);
        });
    }



    $scope.mode = mode;
    $scope.profile = profile;
    $scope.config = config;
    $scope.getFullnameIfFilled = getFullnameIfFilled;
    $scope.loadProfileFromUrl = loadProfileFromUrl;

}]);
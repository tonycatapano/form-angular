'use strict';

// Declare app level module which depends on views, and components
angular.module('formangular', [
    'frapontillo.bootstrap-switch',
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
        emailFormat : null
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


    function loadConfFromUrl(){
        $http({
            method: 'GET',
            url: '/app/assets/json/config.json'
        }).then(function successCallback(response) {
            $scope.config = response.data;
        }, function errorCallback(response) {
            console.error(response);
        });
    }



    $scope.mode = mode;
    $scope.profile = profile;
    $scope.config = config;
    $scope.getFullnameIfFilled = getFullnameIfFilled;
    $scope.loadProfileFromUrl = loadConfFromUrl;

}]);
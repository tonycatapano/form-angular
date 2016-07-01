angular.module('app.profiler')
    .controller('ProfilerController', ProfilerController)
    .directive('profiler', profilerDirective);



function profilerDirective(){
    return {
        restrict: 'E',
        templateUrl: 'profiler/profiler.template.html',
        controller: ProfilerController,
        controllerAs: 'ctrlProfiler'
    }
}


function ProfilerController($scope, profilerService){
    
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


    function getProfile(){
        profilerService.loadProfileFromUrl()
            .then(function successCallback(response) {
                $scope.profile = response.data;
            }, function errorCallback(response) {
                console.error(response);
            });
    }

    function getConf() {
        profilerService.loadConfFromUrl()
            .then(function successCallback(response) {
                response.data.emailFormat = new RegExp(response.data.emailFormat);
                $scope.config = response.data;
            }, function errorCallback(response) {
                console.error(response);
            });
    }


    function showTitle() {
        return profilerService.getFullnameIfFilled($scope);
    }
    
    $scope.mode = mode;
    $scope.profile = profile;
    $scope.config = config;
    $scope.getProfile = getProfile;
    $scope.getConf = getConf;
    $scope.showTitle = showTitle;

    showTitle();

}
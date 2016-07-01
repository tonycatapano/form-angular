angular.module('app.profiler')
    .service('profilerService', ProfilerService);

function ProfilerService($http){

    return {
        loadProfileFromUrl : loadProfileFromUrl,
        loadConfFromUrl : loadConfFromUrl,
        getFullnameIfFilled : getFullnameIfFilled
    }

    function loadProfileFromUrl(){
        return $http({
            method: 'GET',
            url: 'assets/json/profile.json'
        });
    }


    function loadConfFromUrl(){
        return $http({
            method: 'GET',
            url: 'assets/json/config.json'
        });
    }

    function getFullnameIfFilled(model){
        return ( model.profile.firstName && model.profile.lastName) ?
        model.profile.firstName + ' ' + model.profile.lastName +'\'s ':
            "New User ";
    }

}
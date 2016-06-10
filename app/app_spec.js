'use strict';

describe('Formangular app main functionalities', function() {

    beforeEach(module('formangular'));


    /*describe('view controller', function () {

        it('should A', inject(function ($controller) {
            //spec body
            var mainCtrl = $controller('MainCtrl', {
                $scope: {},
                $http: {}
            });
            expect(mainCtrl).toBeDefined();
        }));

        it('should B', inject(function ($controller) {
            //spec body
            var _scope = {};
            $controller('MainCtrl', {
                $scope: _scope,
                $http: {}
            });
            expect(_scope.getFullnameIfFilled()).toBe('New User ');
        }));
    });*/




    describe('Main controller', function(){
        var _scope;
        var mainCtrl;


        beforeEach( inject(function ($controller) {
            _scope = {};
            mainCtrl = $controller('MainCtrl', {
                $scope: _scope,
                $http: {}
            });
        }));

        it('should be defined', inject(function($controller) {
            //spec body
            expect(mainCtrl).toBeDefined();
        }));

        it('should return "New User " on initial conditions ', inject(function($controller) {
            expect(_scope.getFullnameIfFilled()).toBe("New User ");
        }));

        it('should return "New User " when firstName is filled but lastName is untouched ', inject(function($controller) {
            _scope.profile.firstName= "Tonino";
            expect(_scope.getFullnameIfFilled()).toBe("New User ");
        }));

        it('should return "New User " when lastName is filled but firstName is untouched ', inject(function($controller) {
            _scope.profile.lastName= "Catapano";
            expect(_scope.getFullnameIfFilled()).toBe("New User ");
        }));

        it('should return "New User " when firstName is filled but lastName is \'\' (e.g. type&delete)', inject(function($controller) {
            _scope.profile.firstName= "Tonino";
            _scope.profile.lastName = "";
            expect(_scope.getFullnameIfFilled()).toBe("New User ");
        }));

        it('should return "New User " when lastName is filled but firstName is \'\' (e.g. type&delete)', inject(function($controller) {
            _scope.profile.firstName= "";
            _scope.profile.lastName = "Catapano";
            expect(_scope.getFullnameIfFilled()).toBe("New User ");
        }));

        it('should return "Tonino Catapano\'s " when "Tonino" is filled as firstName and "Catapano" is filled as lastName', inject(function($controller) {
            _scope.profile.firstName = "Tonino";
            _scope.profile.lastName = "Catapano";
            expect(_scope.getFullnameIfFilled()).toBe("Tonino Catapano's ");
        }));

        it('should return "0 0\'s " when "0" is filled as firstName and "0" is filled as lastName', inject(function($controller) {
            _scope.profile.firstName = "0";
            _scope.profile.lastName = "0";
            expect(_scope.getFullnameIfFilled()).toBe("0 0's ");
        }));
    })
});

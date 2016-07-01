'use strict';

describe('profiler', function() {

    beforeEach(module('app.profiler'));

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
            expect(profileMockgetFullnameIfFilled(profileMock)).toBe('New User ');
        }));
    });*/




    describe('Service', function(){
        var service;
        var profileMock;



        beforeEach( inject(function (profilerService) {
            service = profilerService;
            profileMock = {};
        }));

        it('should be defined', function() {
            //spec body
            expect(service).toBeDefined();
        });

        it('should return "New User " on initial conditions ', function() {
            expect(service.getFullnameIfFilled(profileMock)).toBe("New User ");
        });

        it('should return "New User " when firstName is filled but lastName is untouched ', function() {

            profileMock.firstName = "Tonino";
            expect(service.getFullnameIfFilled(profileMock)).toBe("New User ");
        });

        it('should return "New User " when lastName is filled but firstName is untouched ', function() {
            profileMock.lastName = "Catapano";
            expect(service.getFullnameIfFilled(profileMock)).toBe("New User ");
        });

        it('should return "New User " when firstName is filled but lastName is \'\' (e.g. type&delete)', function() {
            profileMock.firstName = "Tonino";
            profileMock.lastName = "";
            expect(service.getFullnameIfFilled(profileMock)).toBe("New User ");
        });

        it('should return "New User " when lastName is filled but firstName is \'\' (e.g. type&delete)', function() {
            profileMock.firstName = "";
            profileMock.lastName = "Catapano";
            expect(service.getFullnameIfFilled(profileMock)).toBe("New User ");
        });

        it('should return "Tonino Catapano\'s " when "Tonino" is filled as firstName and "Catapano" is filled as lastName', function() {
            profileMock.firstName = "Tonino";
            profileMock.lastName = "Catapano";
            expect(service.getFullnameIfFilled(profileMock)).toBe("Tonino Catapano's ");
        });

        it('should return "0 0\'s " when "0" is filled as firstName and "0" is filled as lastName', function() {
            profileMock.firstName = "0";
            profileMock.lastName = "0";
            expect(service.getFullnameIfFilled(profileMock)).toBe("0 0's ");
        });
    })
});

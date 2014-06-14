/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var umaDicaApp = angular.module('umaDicaApp', ['ui.router']);

umaDicaApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'partial-home.html'
            })

            .state('usuarios', {
                url: '/usuarios',
                templateUrl: 'partial-usuarios.html',
                controller: 'userController'
            });


})

        .controller('userController', ['$scope', '$window', '$http', '$injector', function($scope, $window, $http, $injector) {
                var init = function() {
                    $http.get('/UmaDica/users/').success(function(data) {
                        $scope.users = data;
                    });
                }();

                $scope.postUser = function() {
                    var user = angular.toJson({user: $scope.user});
                    $http.post('/UmaDica/users/', user)
                            .success(function(data) {
                                console.log(user);
                                $scope.users.unshift(data);
                                reset();
                            })
                            .error(function(data) {
                                console.log(user);
                                console.log(data);
                            });
                };

                $scope.putUser = function() {
                    var url = '/UmaDica/users/',
                            user = angular.toJson({user: $scope.user});
                    $http.put(url, user).success(function(data) {
                        reset();
                        $(".btn-primary").attr("disabled", "disabled");
                        $(".btn-success").removeAttr("disabled");
                    }).
                            error(function(data) {
                                console.log(data.toString());

                            });

                };

                $scope.deleteUser = function(user) {
                    var confirm = $window.confirm('Remove user ' + user.id + '?');
                    if (confirm) {
                        var url = '/UmaDica/users/' + user.id;

                        $http.delete(url).success(function(data) {
                            var index = $scope.users.indexOf(user);
                            $scope.users.splice(index, 1);
                        });
                    }
                };

                $scope.edit = function(user) {
                    $scope.user = user;
                    $(".btn-success").attr("disabled", "disabled");
                    $(".btn-primary").removeAttr("disabled");
                };

                var reset = function() {
                    $scope.user = {id: 0, email: "", name: "", tips: []};
                };
            }]);
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
                templateUrl: 'partial-home.html',
                controller: 'userController'
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
                        console.log($scope.users);
                    });
                }();
                
                var refresh = function(){
                     $http.get('/UmaDica/users/').success(function(data) {
                        $scope.users = data;
                    });
                };

                $scope.postUser = function() {
                    var user = angular.toJson({user: $scope.user});
                    user.tips = [];
                    $http.post('/UmaDica/users/', user)
                            .success(function(data) {
                                $scope.users.unshift(data);
                                reset();
                                refresh();
                            })
                            .error(function(data) {
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

                $scope.buscarFilme = function() {
                    var posArray = Math.floor(Math.random() * 250);
                    var numfilme = ids[posArray];
                    $http.get('http://www.omdbapi.com/?i=' + numfilme).success(function(data) {
                        $scope.filme = data;
                         $("#saveButton").removeAttr("disabled");
                         $("#refreshButton").removeAttr("disabled");
                    });

                };

                $scope.updateUserData = function(userId) {
                    $http.get('/UmaDica/users/' + userId).success(function(data) {
                        $scope.userHome = data;
                        if($scope.userHome.tips){
                            $scope.oldTipsFill = true;
                        }else{
                            $scope.oldTipsFill = false;
                        }
                    });
                };

                $scope.salvarDica = function() {
                    var movie = $scope.filme;
                    var date = new Date();
                    var dia = date.getDate();
                    var mes = date.getMonth()+1;
                    var ano = date.getFullYear();
                    
                    var stringDate = dia+"/"+mes+"/"+ano;
                    var tip = {
                        "movie": movie,
                        "date": stringDate

                    };
                    //tip = angular.toJson(tip);
                    if (typeof $scope.userHome.tips === 'undefined') {
                        $scope.userHome.tips = [];
                        $scope.userHome.tips.push(tip);


                    } else {
                        $scope.userHome.tips.push(tip);
                    }

                    var url = '/UmaDica/users/',
                            user = angular.toJson({user: $scope.userHome});
                    $http.put(url, user).success(function(data) {
                        $http.get('/UmaDica/users/' + $scope.userHome.id).success(function(data) {
                            $scope.userHome = data;
                            if(!$scope.oldTipsFill){$scope.oldTipsFill=true;}
                        });
                        $("#saveButton").attr("disabled","disabled");
                    }).error(function(data) {
                        console.log(data);
                    });
                };

                var ids = [
                    'tt0111161',
                    'tt0068646',
                    'tt0071562',
                    'tt0468569',
                    'tt0110912',
                    'tt0060196',
                    'tt0108052',
                    'tt0050083',
                    'tt0167260',
                    'tt0137523',
                    'tt0120737',
                    'tt0080684',
                    'tt1375666',
                    'tt0109830',
                    'tt0073486',
                    'tt0167261',
                    'tt0099685',
                    'tt0076759',
                    'tt0133093',
                    'tt0047478',
                    'tt0317248',
                    'tt0114369',
                    'tt0114814',
                    'tt0102926',
                    'tt0064116',
                    'tt0038650',
                    'tt0110413',
                    'tt0034583',
                    'tt0118799',
                    'tt0082971',
                    'tt0120586',
                    'tt0054215',
                    'tt0047396',
                    'tt0021749',
                    'tt0120815',
                    'tt0245429',
                    'tt1675434',
                    'tt0209144',
                    'tt0027977',
                    'tt0103064',
                    'tt0043014',
                    'tt0253474',
                    'tt0057012',
                    'tt0078788',
                    'tt0120689',
                    'tt0407887',
                    'tt0172495',
                    'tt0088763',
                    'tt0078748',
                    'tt1345836',
                    'tt1853728',
                    'tt0482571',
                    'tt0405094',
                    'tt0032553',
                    'tt0081505',
                    'tt0095765',
                    'tt0110357',
                    'tt0050825',
                    'tt0169547',
                    'tt0910970',
                    'tt0053125',
                    'tt0053125',
                    'tt0033467',
                    'tt0090605',
                    'tt0435761',
                    'tt0052357',
                    'tt0022100',
                    'tt0082096',
                    'tt0066921',
                    'tt0075314',
                    'tt0364569',
                    'tt0036775',
                    'tt0119698',
                    'tt0105236',
                    'tt0086190',
                    'tt0087843',
                    'tt0056592',
                    'tt0180093',
                    'tt0112573',
                    'tt0056172',
                    'tt0095327',
                    'tt0338013',
                    'tt0051201',
                    'tt0093058',
                    'tt0045152',
                    'tt0070735',
                    'tt0040522',
                    'tt1877832',
                    'tt0071853',
                    'tt0086879',
                    'tt0042192',
                    'tt0208092',
                    'tt0042876',
                    'tt0119488',
                    'tt0040897',
                    'tt0053604',
                    'tt0053291',
                    'tt0041959',
                    'tt0059578',
                    'tt0361748',
                    'tt0097576',
                    'tt0012349',
                    'tt1832382',
                    'tt0062622',
                    'tt0372784',
                    'tt0055630',
                    'tt0105695',
                    'tt0017136',
                    'tt0081398',
                    'tt0114709',
                    'tt0071315',
                    'tt0086250',
                    'tt0993846',
                    'tt1049413',
                    'tt0095016',
                    'tt0363163',
                    'tt0057115',
                    'tt0031679',
                    'tt0457430',
                    'tt0986264',
                    'tt0047296',
                    'tt0050212',
                    'tt0113277',
                    'tt2106476',
                    'tt1187043',
                    'tt0050976',
                    'tt0050986',
                    'tt0044741',
                    'tt0080678',
                    'tt2278388',
                    'tt0089881',
                    'tt0096283',
                    'tt0017925',
                    'tt0083658',
                    'tt0015864',
                    'tt0120735',
                    'tt0119217',
                    'tt1205489',
                    'tt0032976',
                    'tt1305806',
                    'tt0118715',
                    'tt0112641',
                    'tt0025316',
                    'tt1291584',
                    'tt1979320',
                    'tt0434409',
                    'tt0077416',
                    'tt0061512',
                    'tt2024544',
                    'tt0116282',
                    'tt0033870',
                    'tt0347149',
                    'tt0405508',
                    'tt0117951',
                    'tt0031381',
                    'tt0758758',
                    'tt0892769',
                    'tt0395169',
                    'tt0055031',
                    'tt0167404',
                    'tt0064115',
                    'tt0268978',
                    'tt0084787',
                    'tt0046912',
                    'tt0046268',
                    'tt0091763',
                    'tt0266697',
                    'tt0477348',
                    'tt0075686',
                    'tt0266543',
                    'tt0978762',
                    'tt0401792',
                    'tt0079470',
                    'tt0052311',
                    'tt0046911',
                    'tt0074958',
                    'tt0093779',
                    'tt0092005',
                    'tt0245712',
                    'tt0032138',
                    'tt1255953',
                    'tt0848228',
                    'tt0052618',
                    'tt1798709',
                    'tt0032551',
                    'tt0469494',
                    'tt0036868',
                    'tt0053198',
                    'tt0405159',
                    'tt1028532',
                    'tt0107207',
                    'tt0246578',
                    'tt0056801',
                    'tt0440963',
                    'tt0044079',
                    'tt0083987',
                    'tt0060827',
                    'tt0044706',
                    'tt1504320',
                    'tt0038787',
                    'tt0073195',
                    'tt0338564',
                    'tt0087544',
                    'tt0114746',
                    'tt0083922',
                    'tt0088247',
                    'tt0047528',
                    'tt1220719',
                    'tt0079944',
                    'tt0048424',
                    'tt0169102',
                    'tt0107048',
                    'tt1201607',
                    'tt0075148',
                    'tt0072890',
                    'tt1843866',
                    'tt0061184',
                    'tt1130884',
                    'tt0113247',
                    'tt0038355',
                    'tt0058946',
                    'tt0325980',
                    'tt0112471',
                    'tt0072684',
                    'tt0198781',
                    'tt1454468',
                    'tt0061722',
                    'tt0353969',
                    'tt0054997',
                    'tt0092067',
                    'tt0046250',
                    'tt0154420',
                    'tt0058461',
                    'tt1454029',
                    'tt0118694',
                    'tt0085334',
                    'tt1010048',
                    'tt0046359',
                    'tt0120382',
                    'tt0367110',
                    'tt0114787',
                    'tt0040746',
                    'tt0049406',
                    'tt1555149',
                    'tt0101414',
                    'tt0107290',
                    'tt0947798',
                    'tt0111495',
                    'tt0401383',
                    'tt0450259'
                ];


            }]);

        
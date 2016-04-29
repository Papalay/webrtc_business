//Module : connexion
var connexion = angular.module('connexion', ['ui.router']);

//Controller : loginCtrl
connexion.controller('loginCtrl', ['$scope', '$state','$window', 'myService', function($scope, $state, $window, myService){
    var users = [
                {'login' :'webrtc',
                'password' : 'atos'
                }
  ];
 $scope.connexion = function(){
     
        for ( var i in users ){
            var user = users[i];
            if(user.login == $scope.identifiants.login && user.password == $scope.identifiants.password){
                //$window.open('login.html', '_self');
                myService.setUser(user);
                //loadFrame('plugin-front.html');
                $state.go('home'); 
            }
        }                 
 }
}]);
//Router : ...
connexion.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
    $stateProvider
     .state ('login', {
        url : '/login',
        templateUrl : 'views/login.html',
        controller : 'loginCtrl'
    })
    .state ('home', {
        url : '/home',
        templateUrl : 'views/home.html',
        controller : 'loginCtrl'
    })
}]);
//Controller : homeCtrl
connexion.controller('homeCtrl', ['$scope', 'myService', function($scope, myService){
    $scope.user = myService.getUser();
    
}]);
connexion.directive('loadUser', function(){
    return {
        restrict : 'C',
        template : '<tr><td class="btn btn-success">{{visitor}}</td></tr>',
        scope : {
            visitor : '@'
        },
        link : function(scope, element, attrs){
            
        }
    };
});
//Service : myService
connexion.factory('myService', function(){
    
    var user = {};
    var setUser = function(u){
        user =  u;
    };
    var getUser = function(){
        return user;
    };
    return {
        getUser : getUser,
        setUser : setUser
    };
});

//Router 
/*
connexion.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
       .when('/login', {
        templateUrl : 'view.html',
        controller : 'loginCtrl'
    })       
}]);

*/

/*

*/

/*

*/

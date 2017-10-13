var app = angular.module("App", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push(
        function($q, $location) {
        return {
            'responseError':function(rejection){
            if (rejection.status == 401){
                $location.url('/letmein');
            }
            return $q.reject(rejection);
        }
        };
    });
    $routeProvider
        .when('/',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/text',{
            templateUrl: 'partials/text.html',
            controller: 'textCtrl'
        })
        .when('/magnet',{
            templateUrl: 'partials/magnet.html',
            // controller: 'magnetCtrl'
        })
        .when('/gauge',{
            templateUrl: 'partials/gauge.html',
            // controller: 'gaugeCtrl'
        })
        .when('/animation',{
            templateUrl: 'partials/animation.html',
            controller: 'animationCtrl as ACtrl'
        })
        .when('/about',{
            templateUrl: 'partials/about.html',
        })
        .when('/contact',{
            templateUrl: 'partials/contact.html',
        })


        .when('/letmein',{
            templateUrl: 'partials/loginReg.html',
            controller: 'adminCtrl'
        })
        .when('/add',{
            templateUrl: 'partials/add.html',
            controller: 'workCtrl'
        })
        .when('/list',{
            templateUrl: 'partials/list.html',
            controller: 'textCtrl'
        })
        .when('/edit/:id',{
            templateUrl: 'partials/edit.html',
            controller: 'editCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}])

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
            templateUrl: 'partials/dashboard.html',
            controller: 'dashboardCrtl'
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
            controller: 'gaugeCtrl'
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
        .when('/textlist',{
            templateUrl: 'partials/textList.html',
            controller: 'textCtrl'
        })
        .when('/gaugelist',{
            templateUrl: 'partials/gaugeList.html',
            controller: 'gaugeCtrl'
        })
        .when('/editgauge/:id',{
            templateUrl: 'partials/editGauge.html',
            controller: 'gaugeEditCtrl'
        })
        .when('/edittext/:id',{
            templateUrl: 'partials/editText.html',
            controller: 'textEditCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}])

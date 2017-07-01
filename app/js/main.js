(function () {

  angular.module('auth', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      })
      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
      })
      .when('/profile', {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  
  angular
    .module('auth')
    .config(['$routeProvider', '$locationProvider', config]);

})();
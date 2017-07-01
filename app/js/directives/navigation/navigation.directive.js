(function () {

  angular
    .module('auth')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/templates/directives/navigation/navigation.template.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();
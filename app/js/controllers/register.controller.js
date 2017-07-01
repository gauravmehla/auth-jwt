(function() {
  
  angular
    .module('auth')
    .controller('registerCtrl', registerCtrl);

    function registerCtrl () {
      console.log('Register controller is running');
    }

})();
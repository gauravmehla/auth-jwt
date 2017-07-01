(function() {
  
  angular
    .module('auth')
    .controller('loginCtrl', loginCtrl);

    function loginCtrl () {
      console.log('Login controller is running');
    }

})();
(function() {
  
  angular
    .module('auth')
    .controller('profileCtrl', profileCtrl);

    function profileCtrl () {
      console.log('Profile controller is running');
    }

})();
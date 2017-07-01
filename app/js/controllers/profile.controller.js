(function() {
  
  angular
    .module('auth')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', 'meanData'];
  function profileCtrl($location, meanData) {
    var vm = this;

    vm.user = {};

    meanData.getProfile()
      .then(function(response) {
        vm.user = response.data;
      })
      .catch(function (e) {
        console.log(e);
      });
  }

})();
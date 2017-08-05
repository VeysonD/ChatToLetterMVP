angular.module('write-letter')
  .controller('appController', function($scope) {
    this.handleClick = (event) => {
      //console.log(event);
      //event.preventDefault();
      console.log(this.input);
      console.log($scope);
      this.input = '';
      $scope.submit.$setUntouched();
      $scope.submit.$setPristine();
    }
  })
  .component('textInput', {
    bindings: {
      message: '<'
    },
    controller: 'appController',
    templateUrl: 'client/templates/textInput.html'
  })

angular.module('write-letter')
  .controller('textInputController', function($scope) {
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
      message: '<',
      letter: '<'
    },
    controller: 'textInputController',
    templateUrl: 'client/templates/textInput.html'
  })

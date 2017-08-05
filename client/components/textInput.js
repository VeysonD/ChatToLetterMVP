angular.module('write-letter')
  .controller('appController', function($scope) {
    this.handleClick = (event) => {
      //console.log(event);
      //event.preventDefault();
      console.log(this.input);
      console.log($scope);
      $scope.$ctrl.input = '';
      $scope.submitMessage.$setUntouched();
      $scope.submitMessage.$setPristine();
    }
  })
  .component('textInput', {
    bindings: {
      message: '<'
    },
    controller: 'appController',
    templateUrl: 'client/templates/textInput.html'
  })

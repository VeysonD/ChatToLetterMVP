angular.module('write-letter')
  .controller('textInputController', function($scope, zoom) {
    this.handleClick = (event) => {
      zoom.retrieveMessages(messages => {
        console.log(messages);
        this.messages = data;
      })
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

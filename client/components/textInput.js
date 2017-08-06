angular.module('write-letter')
  .controller('textInputController', function($scope, zoom) {
    this.handleClick = (event) => {
      zoom.postMessage(this.input);

      zoom.retrieveMessages(messages => {
        this.messages(messages.data);
      })

      this.input = '';
      $scope.submit.$setUntouched();
      $scope.submit.$setPristine();
    }
  })
  .component('textInput', {
    bindings: {
      messages: '<',
      letter: '<'
    },
    controller: 'textInputController',
    templateUrl: 'client/templates/textInput.html'
  })

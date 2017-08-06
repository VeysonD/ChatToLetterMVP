angular.module('write-letter')
  .controller('textInputController', function($scope, zoom) {
    this.handleClick = (event) => {
      console.log('Submit button this', this.input);

      zoom.postMessage(this.input);

      zoom.retrieveMessages(messages => {
        this.messages(messages.data);
      })

      console.log('After submit button GET request');
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

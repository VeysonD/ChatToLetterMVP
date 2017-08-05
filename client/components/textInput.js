angular.module('write-letter')
  .controller('appController', function(letter) {
    this.handleClick = function(event) {
      console.log(event);
      event.preventDefault();
      console.log(this.input);
    }
  })
  .component('textInput', {
    bindings: {
      message: '<'
    },
    controller: 'appController',
    templateUrl: 'client/templates/textInput.html'
  })

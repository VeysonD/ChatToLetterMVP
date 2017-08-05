angular.module('write-letter')
  .controller('appController', function(letter) {

  })
  .component('textInput', {
    bindings: {
      message: '<'
    },
    controller: 'appController',
    templateUrl: 'client/templates/textInput.html'
  })

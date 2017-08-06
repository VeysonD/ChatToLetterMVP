angular.module('write-letter')
  .controller('letterController', function() {

  })
  .component('displayLetter', {
    bindings: {
      letter: '<',
      messages: '<',
      message: '<'
    },
    controller: 'letterController',
    templateUrl: 'client/templates/letter.html'
  })

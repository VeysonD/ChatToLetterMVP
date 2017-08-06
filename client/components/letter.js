angular.module('write-letter')
  .controller('letterController', function() {

  })
  .component('displayLetter', {
    bindings: {
      letter: '<',
    },
    controller: 'letterController',
    templateUrl: 'client/templates/letter.html'
  })

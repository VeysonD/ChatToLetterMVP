angular.module('write-letter')
  .controller('appController', function() {

  })
  .component('displayLetter', {
    bindings: {
      letter: '<'
    },
    controller: 'appController',
    templateUrl: 'client/templates/letter.html'
  })

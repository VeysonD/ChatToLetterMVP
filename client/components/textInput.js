angular.module('write-letter')
  .controller('appController', function(letter) {

  })
  .component('textInput', {
    controller: 'appController',
    templateUrl: 'client/templates/textInput.html'
  })

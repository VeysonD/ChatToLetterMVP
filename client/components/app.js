angular.module('write-letter')
  .controller('appController', function($scope) {
    this.messages = 'Hello';
    this.letter = 'meow';

  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

angular.module('write-letter')
  .controller('appController', function($scope) { //add zoom
    this.messages = 'Hello';
    this.letter = 'meow';

    // zoom.retrieveMessages(messages => {
    //   this.messages = data;
    // })
  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

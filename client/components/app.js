angular.module('write-letter')
  .controller('appController', function() {
    this.messages = 'Hello';
    this.letter = {};

    // zoom.retrieveMessages(messages => {
    //   this.messages = data;
    // })
  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

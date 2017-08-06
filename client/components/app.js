angular.module('write-letter')
  .controller('appController', function($scope) {
    this.messages = 'Dear Robin, ';
    this.storedMessages = {};

    this.messageRetrieve = (data) => {
      for (var i = 0; i < data.length; i ++) {
        var messageId = data[i]._id;
        //Add only new messages to render
        if (!this.storedMessages[messageId]) {
          this.messages += data[i].message + ' ';
          this.messageRetrieve[messageId] = true;
        }
      }
    }
  })

  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

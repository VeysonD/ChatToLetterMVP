angular.module('write-letter')
  .controller('appController', function($scope) {
    //this.messages = 'Why is this happening';
    this.messageRetrieve = (data) => {
      this.messages = data;
    }
    this.letter = 'meow';

  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

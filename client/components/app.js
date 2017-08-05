angular.module('write-letter')
  .controller('appController', function(letter) {
    this.handleClick = () => {
      throw error;
      event.preventDefault();
      console.log(event);
    };

  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

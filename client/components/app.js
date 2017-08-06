angular.module('write-letter')
  .controller('appController', function($scope, $timeout, zoom) {
    this.messages = 'Dear Robin, ';
    this.storedMessages = {};

    this.messageRetrieve = (data) => {
      for (var i = 0; i < data.length; i ++) {
        //console.log('Stop rerendering everything', this.storedMessages);
        var messageId = data[i]._id;
        //Add only the new messages to render
        if (!this.storedMessages[messageId]) {
          this.messages += data[i].message + ' ';
          this.storedMessages[messageId] = true;
        }
      }
    }

    //polls for updates in the database
      //is there a better method than this?
    $scope.intervalFunction = () => {
      $timeout(function() {
        zoom.retrieveMessages(messages => {
          $scope.$ctrl.messageRetrieve(messages.data);
        });
        console.log('This will appear every 5 seconds');
        $scope.intervalFunction();
      }, 5000)
    };

    //starting the interval
    //$scope.intervalFunction();

  })
  .component('app', {
    controller: 'appController',
    templateUrl: 'client/templates/app.html'
  })

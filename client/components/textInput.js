angular.module('write-letter')
  .controller('textInputController', function($scope, zoom) { //add zoom later
    this.handleClick = (event) => {
      //console.log(event);
      zoom.retrieveMessages(messages => {
        console.log('What is', this);
        console.log('$scope', $scope);
        //this.messages = messages.data;
        this.messages(messages);
      })

      console.log('After submit button GET request');
      this.input = '';
      $scope.submit.$setUntouched();
      $scope.submit.$setPristine();
    }
  })
  .component('textInput', {
    bindings: {
      messages: '<',
      letter: '<'
    },
    controller: 'textInputController',
    templateUrl: 'client/templates/textInput.html'
  })

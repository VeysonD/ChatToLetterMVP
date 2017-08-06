angular.module('write-letter')
  .controller('textInputController', function($scope, zoom) { //add zoom later
    this.handleClick = (event) => {
      //console.log(event);
      zoom.retrieveMessages(messages => {
        //console.log(messages);
        this.messages = messages;
      })

      // $http.get('http://127.0.0.1:8080/messages')
      // .then(function(response) {
      //   console.log('GET response 1', response);
      //   this.input = response.data[0].message;
      //   // if (callback) {
      //   //   console.log('GET response callback 2', response);
      //   //   callback(response)
      //   // }
      // })
      // .catch(function(response) {
      //   console.log('is this an error? 3', response);
      // })
      console.log('After submit button GET request');
      //this.input = '';
      $scope.submit.$setUntouched();
      $scope.submit.$setPristine();
    }
  })
  .component('textInput', {
    bindings: {
      message: '<',
      letter: '<'
    },
    controller: 'textInputController',
    templateUrl: 'client/templates/textInput.html'
  })

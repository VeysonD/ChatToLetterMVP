angular.module('write-letter')
  .service('zoom', function ($http, $window) {
    this.server = 'http://127.0.0.1:8080/messages' // maybe add || localhost
    this.postMessage = () => {
      $http.post(this.server, {

      })
    }



    this.retrieveMessages = (callback) => {
      console.log('RETRIEVING');
      $http.get(this.server)
      .then(function(response) {
        console.log('GET response 1', response);
        if (callback) {
          console.log('GET response callback 2', response);
          callback(response);
        }
      })
      .catch(function(response) {
        console.log('is this an error? 3', response);
      })
    }
  })

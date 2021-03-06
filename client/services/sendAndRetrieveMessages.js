angular.module('write-letter')
  .service('zoom', function ($http, $window) {
    this.server = 'http://127.0.0.1:8080/messages' // maybe add || localhost
    this.username = window.location.search.substr(10);
    this.postMessage = (message) => {
      console.log('POST messages', message);
      var date_time = new Date();
      var data = {
        date_time: date_time,
        message: message,
        sender: this.username
      }
      $http.post(this.server, data)
      .then(function(response) {
        console.log('POST response', response);
      }).catch(function(response) {
        console.log('POST response error', response);
      })
    }

    this.retrieveMessages = (callback) => {
      console.log('GET messages');
      $http.get(this.server)
      .then(function(response) {
        console.log('GET response', response);
        if (callback) {
          console.log('GET response callback', response);
          callback(response);
        }
      })
      .catch(function(response) {
        console.log('GET response error', response);
      })
    }
  })

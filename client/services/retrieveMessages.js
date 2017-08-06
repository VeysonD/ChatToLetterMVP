angular.module('write-letter')
  .service('zoom', function ($http, $window) {
    //this.server = 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages'
    this.server = '127.0.0.1/messages'
    this.postMessage = () => {
      $http.post(this.server, {

      })
    }



    this.retrieveMessages = () => {
      $http.get(this.server, {
        data: {order: '-createdAt', limit: 20},
        contentType: 'application/json',
      })
      .then(function(response) {
        console.log(response);
        if (callback) {
          console.log(response);
          //callback(response)
        }
      })
      .catch(function(response) {
        console.log(response);
      })
    }
  })

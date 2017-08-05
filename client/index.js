var app = angular.module('write-letter', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://zoom.us/**'
    ]);
  });

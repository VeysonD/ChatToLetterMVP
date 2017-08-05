var app = angular.module('write-letter', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhiteLlist([
      'self',
      'https://zoom.us/**'
    ]);
  });

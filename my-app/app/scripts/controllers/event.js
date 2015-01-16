'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('EventCtrl', function ($scope) {
    $scope.events = [
    {'name': 'Thursday Jan 15 - Advisory Planning Commission',
     'snippet': 'Advisory Planning Commission meetings occur 12 days prior to Public Hearings in the Clerks Committee Room 1 & 1A.'},
    {'name': 'Friday Jan 16 - All is Unmentionable, Up in the Air: Eli Bornowsky',
     'snippet': ' This exhibition features a number of large canvas ‘doubles’ which mirror each other with their almost-but-not-quite identical forms.'},
    {'name': 'Saturday Jan 17 - Council Meeting',
     'snippet': 'Burnaby City Council meets evenings at 7:00 PM in Council Chamber.'},
    {'name': 'Tuesday Jan 20 - Executive Committee',
     'snippet': 'Executive Committee of Council meets the 3rd Thursday of the month in the Council Committee Room.'}
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('HomeCtrl', function($scope) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.images = [
	    {url:"images/test.jpg", date:'21/01/2015', caption: 'Caption goes here'},
	    {url:"images/1.jpg", date:'01/02/2015', caption: 'Caption goes here'},
	    {url:"images/2.jpg", date:'17/03/2015', caption: 'Caption goes here'},
	    {url:"images/3.jpg", date:'22/10/2015', caption: 'Caption goes here'},
	    {url:"images/4.jpg", date:'01/07/2015', caption: 'Caption goes here'},
	    {url:"images/5.jpg", date:'22/05/2015', caption: 'Caption goes here'},
	    {url:"images/6.jpg", date:'03/03/2015', caption: 'Caption goes here'},
	    {url:"images/7.jpg", date:'18/09/2015', caption: 'Caption goes here'},
	    {url:"images/test.jpg", date:'19/09/2015', caption: 'Caption goes here'},
	];
  });
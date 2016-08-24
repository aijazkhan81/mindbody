var app = angular.module('myApp', []);


// Controller
app.controller('mainCtrl', function($scope, getData, $log){
	// API Call for getting programs list
	getData.getPrograms().then(function(data){
		$scope.programs = data.data;
	});

	// API Call for getting Pricing list
	getData.getPricing().then(function(data){
		$scope.prices = data.data;
	});
});
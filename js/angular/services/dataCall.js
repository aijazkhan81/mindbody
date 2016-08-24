app.factory('getData', function($http){
	function getPrograms(){
		return $http.get('https://api.myjson.com/bins/5bdb3')
	};

	function getPricing(){
		return $http.get('https://api.myjson.com/bins/17oy7')
	};

	return{
		getPrograms: getPrograms,
		getPricing: getPricing
	};
});

// Service call for resuable API calls
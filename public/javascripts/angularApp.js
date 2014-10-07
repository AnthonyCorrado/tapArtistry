var app = angular.module('tapArtApp', ['ngAnimate']);

app.controller('StyleCtrl', ['$scope', '$window', '$timeout', 'windowSize', 'stylesheetModel', function ($scope, $window, $timeout, windowSize, stylesheetModel) {

	console.log(stylesheetModel.theSun[1]);
	$scope.cloud1Style = stylesheetModel.cloud1;
	$scope.cloud2Style = stylesheetModel.cloud2;
	$scope.sunStyle = stylesheetModel.theSun[2];
	

}]);

app.factory('stylesheetModel', function() {
	var mainCSS = {
		cloud1: {
			'display': 'block', 'margin-left': '20%'
		},
		cloud2: {
			'display': 'block', 'margin-left': '60%'
		},
		theSun: {
			0: '100%', 1: '0%', 2:'10%', 3: '25%', 4: '40%'
		}
	};
	return mainCSS;
});

// outputs window dimensions for active scaling
app.factory('windowSize', function($window) {
	return function ($scope) {
		$scope.intialWindowSize = function () {
			var windowWide = $window.innerWidth;
			var windowHigh = $window.innerHeight;
			return { winWidth: windowWide, winHeight: windowHigh };
		};
		return angular.element($window).bind('resize', function() {
			$scope.initialWindowSize();
			console.log($scope.initialWindowSize());
			return $scope.$apply();
		});
	};

});

app.directive('rescale', function($window, $timeout) {
	return function ($scope) {
		$scope.initializeWindowSize = function() {
			$scope.windowHeight = $window.innerHeight;
			return $scope.windowWidth = $window.innerWidth;
		};
		$scope.initializeWindowSize();
		return angular.element($window).bind('resize', function() {
			$scope.initializeWindowSize();
			return $scope.$apply();
		});
	};
});
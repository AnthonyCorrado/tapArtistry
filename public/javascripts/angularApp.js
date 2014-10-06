var app = angular.module('tapArtApp', ['ngAnimate']);


app.controller('StyleCtrl', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {

	$scope.cat = false;
    $timeout(function() {
        $scope.$apply('cat = true');
    }, 2000);

}]);

app.directive('rescale', function($window) {
	return function ($scope) {
		$scope.initializeWindowSize = function() {
			$scope.windowHeight = $window.innerHeight;
			console.log($window.innerHeight);
			console.log($window.innerWidth);
			return $scope.windowWidth = $window.innerWidth;
		};
		$scope.initializeWindowSize();
		return angular.element($window).bind('resize', function() {
			$scope.initializeWindowSize();
			return $scope.$apply();
		});
	};
});
var Hearthstone = angular.module('Hearthstone', []);

Hearthstone.controller('CardsCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.sort = {};
	$scope.columns = [
		'Name',
		'Class',
		'Rarity',
        'Type',
        'Race',
        'Cost',
        'Attack',
        'Health',
        'Description'
	];
	$scope.classes = [
		'Priest',
		'Druid',
		'Hunter',
		'Rogue',
		'Paladin',
		'Warrior',
		'Warlock',
		'Shaman',
		'Mage'
	];
	$scope.types = [
		'Spell',
		'Minion',
		'Weapon'
	]
	$http.get('/cards.json').success(function(data){
		$scope.cards = data;
	});

	$scope.setClass = function(theClass){
		$scope.theClass = theClass;
	};
	$scope.setType = function(theType){
		$scope.theType = theType;
	};
	$scope.setOrderBy = function(column){
		var sort = $scope.sort;
        if (sort.column == column.toLowerCase()) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column.toLowerCase();
            sort.descending = false;
        }
	};
	$scope.getArrowClass = function(column, descending){
		if(column.toLowerCase() == $scope.sort.column){
			if(descending){
				//return 'glyphicon-arrow-down';
			}
			else{
				//return 'glyphicon-arrow-up'
			}
		}

		return '';
	};
}]);


var Hearthstone = angular.module('Hearthstone', []);
Hearthstone.factory('cardsService',['$http',  function($http){
    var cardsService = {
        getCards: function(cb){
                return $http.get('/cards.json').success(cb);          
        },

        cardColumns :  [
		    'Name',
		    'Class',
		    'Rarity',
            'Type',
            'Race',
            'Cost',
            'Attack',
            'Health',
            'Description'
	    ],

        cardTypes : [
            'Spell', 
            'Minion', 
            'Weapon'
        ],

        cardClasses: [
            'Priest',
            'Druid',
            'Hunter',
            'Rogue',
            'Paladin',
            'Warrior',
            'Warlock',
            'Shaman',
            'Mage'
	    ]
    };
    
    return cardsService; 
}]);
Hearthstone.controller('CardsCtrl', ['$scope', '$http','cardsService', function ($scope, $http, cardsService) {
	$scope.sort = {};
	$scope.columns = cardsService.cardColumns;
    $scope.types = cardsService.cardTypes;
    $scope.classes = cardsService.cardClasses;
    cardsService.getCards(function(data){
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

Hearthstone.directive('cardsTable', function(){
    return {
        restrict: 'E',
        templateUrl : '/partials/cardsTable.html'
    }
});
Hearthstone.directive('filteringForm', function(){
    return {
        restrict: 'E', 
        templateUrl: '/partials/filteringForm.html'
    }
});


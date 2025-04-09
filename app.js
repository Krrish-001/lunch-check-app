(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';

        $scope.checkLunch = function() {
            var items = $scope.lunchItems.split(',');
            // Trim each item and filter out empty strings
            items = items.map(item => item.trim()).filter(item => item !== '');

            if (items.length === 0) {
                $scope.message = 'Please enter data first';
                $scope.messageClass = 'error';
            } else if (items.length <= 3) {
                $scope.message = 'Enjoy!';
                $scope.messageClass = 'success';
            } else {
                $scope.message = 'Too much!';
                $scope.messageClass = 'success';
            }
        };
    }
})();

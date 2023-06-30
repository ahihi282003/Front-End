window.DangXuatController = function ($scope, $rootScope, $http) {
  $scope.logOut = function () {
    $rootScope.user = null;
  };
};

window.DoiMKController = function ($scope, $rootScope, $http) {
  const api = "https://62128b57f43692c9c6edaa5a.mockapi.io/Asm_Fe/Users";
  $scope.onFormSubmit = function (event) {
    event.preventDefault();
    $http
      .put(api + "/" + $rootScope.user.id, $scope.account)
      .then(function (response) {
        if ($scope.oldPassword != $rootScope.user.password) {
          window.alert("Mật khẩu hiện tại sai!!!");
          return;
        }
        if ($scope.oldPassword == $rootScope.user.password) {
          if ($scope.password != $scope.account.password) {
            window.alert("Mật khẩu mới không trùng!!!");
            return;
          }
          if ($scope.password == $scope.account.password) {
            $scope.account.id = response.data.id;
            $scope.listAccount.push = $scope.account;
            window.alert("Đổi mật khẩu thành cônggg!!!");
            $rootScope.user.password = $scope.account.password;
            window.location.href = "#home";
          }
        }
      });
  };
};

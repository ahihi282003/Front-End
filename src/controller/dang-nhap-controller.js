window.DangNhapController = function ($http, $scope, $rootScope) {
  $rootScope.listAccount = [];
  const apiUser = "https://63ddb625367aa5a7a4132f21.mockapi.io/account";
  $http.get(apiUser).then(function (response) {
    $rootScope.listAccount = response.data;
  });
  $scope.login = function () {
    for (let index = 0; index < $rootScope.listAccount.length; index++) {
      if (
        $scope.username == $rootScope.listAccount[index].username &&
        $scope.password == $rootScope.listAccount[index].password
      ) {
        window.location.href = "#home";
        $rootScope.user = $rootScope.listAccount[index];
        let text = "khách hàng";
        if ($rootScope.user.role != "true") {
          text = "admin";
        }
        window.alert("Đăng nhập thành công với vai trò " + text + "!");
        return;
      }
    }
    window.alert("Thông tin tài khoản hoặc mật khẩu sai!!!");
  };
};

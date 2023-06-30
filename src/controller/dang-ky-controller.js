window.DangKyController = function ($http, $scope, $rootScope) {
  $scope.account = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: true,
    birthday: "",
    role: false,
  };
  const api = "https://63ddb625367aa5a7a4132f21.mockapi.io/account";
  $scope.onFormSubmit = function (event) {
    event.preventDefault();
    $http.post(api, $scope.account).then(function (response) {
      console.log(response);
      $rootScope.user = response.data;
      window.alert("Đăng ký thành công!!!");
      window.location.href = "#home";
    });
  };
};

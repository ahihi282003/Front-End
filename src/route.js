var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: HomeController,
    })
    .when("/gioi-thieu", {
      templateUrl: "./pages/gioi-thieu.html",
    })
    .when("/dang-nhap", {
      templateUrl: "../src/dang-nhap.html",
      controller: DangNhapController,
    })
    .when("/dang-ky", {
      templateUrl: "../src/dang-ky.html",
      controller: DangKyController,
    })
    .when("/doi-mat-khau", {
      templateUrl: "../src/doi-mat-khau.html",
      controller: DoiMKController,
    })
    .when("/doi-thong-tin", {
      templateUrl: "../src/doi-thong-tin.html",
      controller: changeTTController,
    })
    .when("/phan-hoi", {
      templateUrl: "../src/phan-hoi.html",
    })
    .when("/quen-mat-khau", {
      templateUrl: "../src/quen-mat-khau.html",
    })
    .when("/tai-khoan", {
      templateUrl: "../src/tai-khoan.html",
    })
    .when("/gio-hang", {
      templateUrl: "../src/gio-hang.html",
    })
    .when("/san-pham", {
      templateUrl: "./pages/san-pham.html",
      controller: HomeController,
    })
    .when("/detail/:id", {
      templateUrl: "./pages/detail.html",
      controller: HomeController,
    })
    .when("/quan-ly-san-pham", {
      templateUrl: "../src/quan-ly-san-pham.html",
      controller: HomeController,
    })
    .when("/quan-ly-the-loai", {
      templateUrl: "../src/quan-ly-the-loai.html",
      controller: TheLoaiController,
    })
    .when("/logOut", {
      controller: DangXuatController,
      redirectTo: "/home",
    })
    .otherwise({
      redirectTo: "/home",
    });
});

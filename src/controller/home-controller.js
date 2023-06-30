window.HomeController = function ($scope, $http) {
  $scope.listDongHoall = [];
  $scope.form_DH = {
    url: "",
    ma: "",
    price: "",
    name: "",
    id: "",
    hsx: "",
  };
  $scope.viTriSauKhiUpdate = -1;
  $http.get(dongHoall).then(function (response) {
    $scope.listDongHoall = response.data;
  });
  $scope.detailDongHo = function (event, index) {
    event.preventDefault();
    let dh = $scope.listDongHoall[index];
    let apiDH = dongHoall + "/" + dh.id;
    $http.get(apiDH).then(function (response) {
      $scope.form_DH = response.data;
      $scope.viTriSauKhiUpdate = index;
    });
  };
  $scope.removeDongHo = function (event, index) {
    event.preventDefault();
    let dh = $scope.listDongHoall[index];
    let API = dongHoall + "/" + dh.id;
    $http.delete(API).then(function () {
      $scope.listDongHoall.splice(index, 1);
      alert("xoa thanh cong");
    });
  };
  $scope.addDongHo = function (event) {
    event.preventDefault();
    $http.post(dongHoall, $scope.form_DH).then(function (response) {
      $scope.listDongHoall.push(response.data);
      alert("Thêm thành công!");
    });
  };
  $scope.updateDongHo = function (event) {
    event.preventDefault();
    let dh = $scope.listDongHoall[$scope.viTriSauKhiUpdate];
    let api = dongHoall + "/" + dh.id;
    $http.put(api, $scope.form_DH).then(function (response) {
      $scope.listDongHoall[$scope.viTriSauKhiUpdate] = response.data;
    });
    alert("Update thành công");
  };
};

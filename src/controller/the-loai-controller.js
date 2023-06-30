window.TheLoaiController = function ($scope, $http) {
  $scope.listCategories = [];
  $scope.form_Cate = {
    id: "",
    name: "",
  };
  $scope.viTriUpdate = -1;
  $http.get(theloai).then(function (response) {
    $scope.listCategories = response.data;
  });
  $scope.detailCate = function (event, index) {
    event.preventDefault();
    $scope.form_Cate = $scope.listCategories[index];
    $scope.viTriUpdate = index;
  };
  $scope.removeCate = function (event, index) {
    event.preventDefault();
    let tl = $scope.listCategories[index];
    let api = theloai + "/" + tl.id;
    $http.delete(api).then(function () {
      $scope.listCategories.splice(index, 1);
      alert("Xóa thành công!");
    });
  };
  $scope.addCategories = function (event) {
    event.preventDefault();
    $http.post(theloai, $scope.form_Cate).then(function (response) {
      $scope.listCategories.push(response.data);
      alert("Thêm thành công!");
    });
  };
  $scope.updateCate = function (event) {
    event.preventDefault();
    let tl = $scope.listCategories[$scope.viTriUpdate];
    let api = theloai + "/" + tl.id;
    $http.put(api, $scope.form_Cate).then(function (response) {
      $scope.listCategories[$scope.viTriUpdate] = response.data;
    });
    alert("Update thành công!");
  };
};

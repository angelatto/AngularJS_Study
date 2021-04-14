// 메인 모듈인 app을 가져온다. 
angular.module("app")
.controller("exam20Controller", function($scope, $timeout){
   $scope.pageUrl = "/#!/";

   $scope.imgUrl = "resources/img/photo1.jpg";

   $timeout(() => {
       $scope.imgUrl1 = "resources/img/photo7.jpg";
       $scope.imgUrl2 = "resources/img/photo8.jpg";
   }, 5000);
});

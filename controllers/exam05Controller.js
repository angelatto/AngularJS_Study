// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam05Controller", function($scope){
        console.log("exam05Controller instanciation (객체 생성 시점 확인)");
        $scope.controllerName = "exam05Controller";
    })
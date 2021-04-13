// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam11Controller", function($scope){
        console.log("exam11Controller instanciation (객체 생성 시점 확인)");
        $scope.content = "";

        $scope.setContent = (content) => {
            $scope.content = content;
        };
    });
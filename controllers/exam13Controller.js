// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam13Controller", function($scope){
        console.log("exam13Controller instanciation (객체 생성 시점 확인)");
        $scope.todos = [
            {action: "동영상 녹화", complete: false},
            {action: "앵귤러JS 복습", complete: false},
            {action: "알마인드", complete: false}
        ];
        
        $scope.job = "개발자"; // radio 버튼 기본값 주기 
    });
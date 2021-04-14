// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam15Controller", function($scope){
        console.log("exam15Controller instanciation (객체 생성 시점 확인)");
        $scope.todos = [
            {action: "동영상 녹화", complete: false},
            {action: "앵귤러JS 복습", complete: false},
            {action: "알마인드", complete: false},
            {action: "밥먹기", complete: false}
        ];
    
        $scope.viewFile = () => {
            const fileName = $scope.showList? "list.html" : "table.html";
            return fileName;
        };

        $scope.changeView = () => {
            $scope.showList = !$scope.showList;
        };

        $scope.handleLoad = () => {
            console.log("AJAX 통신이 완료됨");
            
        };
    });
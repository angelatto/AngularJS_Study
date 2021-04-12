// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam06Controller", function($scope){
        console.log("exam06Controller instanciation (객체 생성 시점 확인)");
        $scope.controllerName = "exam06Controller";
        $scope.cities = ["서울", "뉴욕", "런던"];
        $scope.city = "서울";
        $scope.getCountry = () => {
            switch($scope.city) {
                case "서울":
                    return "한국";
                case "뉴욕":
                    return "미국";
                case "런던":
                    return "영국";
                
            }
        };
    });
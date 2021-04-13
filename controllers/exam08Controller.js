// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam08Controller", function($scope, $rootScope){
        console.log("exam08Controller instanciation (객체 생성 시점 확인)");
        $scope.controllerName = "exam08Controller";
        
        // view에서 ng-click시에 여기로 들어옴 
        $scope.login = (user) => { 
            if(user && user.uid && user.upassword){
                // 로그인이 성공되었다고 가정 
                $rootScope.rootUid = user.uid;
                console.log("rootUid:  " + $rootScope.rootUid);
            }
        };
    });
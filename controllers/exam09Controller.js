// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam09Controller", function($rootScope, $scope){
        console.log("exam09Controller instanciation (객체 생성 시점 확인)");

        $scope.login = (user) => {
            if(user && user.uid && user.upassword){
               console.log(user);
               // 방송하기 
               $rootScope.$broadcast("loginSuccess", {uid:user.uid});
            }
        };

        // 방송 수신 
        $scope.$on("loginSuccess", (event, message) => {
            console.log("exam09Controller가 loginSuccess 방송 수신함");
            console.log(message);
        });

        // logout 방송 전달 
        $scope.logout = () => {
            $rootScope.$broadcast("logout");
        };
    });
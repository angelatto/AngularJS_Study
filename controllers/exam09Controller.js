// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam09Controller", function($rootScope, $scope){
        console.log("exam09Controller instanciation (객체 생성 시점 확인)");

        $scope.login = (user) => {
            if(user && user.uid && user.upassword){
               // 방송하기 -> 방송 이름과 방송할 메세지 필요 
               console.log("exam09 - login()에서 방송 보내기 ");
               $rootScope.$broadcast("loginSuccess", {uid:user.uid}); 
               // 방송을 rootScope에서 전달했기 때문에 먼저 루트 부터 방송 수신하고 자신이 방송 수신 
            }
        };

        // 방송 수신
        $scope.$on("loginSuccess", (event, message) => {
            console.log("exam09Controller가 loginSuccess 방송 수신함");
            console.log(message);
        });

        // logout 방송 전달 
        $scope.logout = () => {
            // 방송하기 
            console.log("exam09 - logout()에서 방송 보내기 ");
            $rootScope.$broadcast("logout");
        };
    });
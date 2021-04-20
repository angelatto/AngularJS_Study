/*
const app = angular.module("app", ["ngRoute"]); 
1. angular가 동작하기 위한 실행 모듈
2. app을 ng-app에 등록해주어야 html에서 인식할 수 있다.
3. ngRoute는 라우터에 이미 등록된 모듈이다. 사용하겠다고 선언해준다. 

app.config(function($locationProvider) {
    console.log("app - config callback");
});
=> 라우터 설정하는 곳 
*/

// app 모듈 생성 
angular.module("app", ["ngRoute", "exam03Module", "exam04Module"])
    .config(function(counterServiceByProviderProvider,$logProvider) {
        console.log("app.js - config callback ");
        /* (중요***)
            1. 다른데는 안되고 config 함수에서만 프로바이더 객체를 주입받을 수 있다. 
            2. 프로바이터 접미사 붙여준다. 
         */
        counterServiceByProviderProvider.setCount(100);
        /* true로 해놓아야 디버그 레벨의 로그가 브라우저의 콘솔창에서 보여진다. */
        $logProvider.debugEnabled(true);

    })
    .run(function($rootScope, $http) {
        console.log("app.js - run callback");
        // 전역 데이터 
        $rootScope.rootUid = "user100";
        // 전역 함수 
        $rootScope.rootGetGreet = () => {
            return "Hello AngularJS";
        };
        // 어플리케이션이 실행될때마다 자동실행 - 세션 저장소에 있는 uid, authToken을 읽기 
        $rootScope.rootUid = sessionStorage.getItem("uid");
        $rootScope.authToken = sessionStorage.getItem("authToken");
       
        // $rootScope.authToken의 값의 변화를 감시 
        $rootScope.$watch("authToken", (newValue) => {
            if(newValue){  // 로그인 상태 , 여기서 세션 저장해도 댐 
                $http.defaults.headers.common.authToken = newValue;
            }else{  // 로그아웃 상태 , 여기서 세션 지워도 댐 
                delete $http.defaults.headers.common.authToken;
            }
        });

    })
    /* 
    중첩된 컨트롤러 범위에서 사용할 수 있는 상태 데이터 및 함수 
    mainController를 index.html의 body에 설정해놓으면 계층관계로 인해서
    다른 모든 컨트롤러에서도 사용 가능하다. 
    */
    .controller("mainController", function($scope, $rootScope, $location, $route){
        $scope.mainUid = "user200";

        $scope.mainGetGreet = () => {
            return "Hello, MainController";
        };

        $scope.logout = () => {
            $rootScope.rootUid = "";
            $rootScope.authToken = "";
            sessionStorage.removeItem("uid");
            sessionStorage.removeItem("authToken");
           // delete $rootScope.rootUid;
        };

        // login 방송 수신 
        $scope.$on("loginSuccess", (event, message) => {
            console.log("mainController가 loginSuccess 방송 수신함");
            console.log(message);
            $rootScope.rootUid = message.uid;
        });

        // logout 방송 수신 
        $scope.$on("logout", (event, message) => {
            console.log("mainController가 logout 방송 수신함");
            $rootScope.rootUid = "";
        });

        // 이전 URL과 동일한 URL일 경우 리프레쉬함 
        $scope.reloadable = (path) => {
            if($location.url().includes(path)){
                $route.reload(); // 알아두기 !! 현재 페이지 갱신 
            }
        };


    });
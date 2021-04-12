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
    .config(function() {
        console.log("app.js - config callback ");
    })
    .run(function() {
        console.log("app.js - run callback");
    });
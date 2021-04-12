/* 의존 모듈이 없다 하더라도 대괄호를 붙여줘야 모듈이 생성된다.  */

// exam03Module 이라는 모듈 "생성"
angular.module("exam03Module", [])
    .config(function (){
        console.log("exam03Module - config callback");
    })
    .controller("exam03ModuleController", function($scope) {
        console.log("exam03Module - controller");
        $scope.controllerName = "exam03ModuleController22";

    });



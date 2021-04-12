// exam04Module 이라는 모듈 "생성" 
angular.module("exam04Module", [])
    .config(function (){
        console.log("exam04Module - config callback");
    })
    .run(function() {
        console.log("exam04Module - run callback");
    });
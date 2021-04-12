/* 이미 만들어진 모듈을 가져와서 사용하는 곳 ([]가 빠져있기 때문에 알 수 있다. ) */
angular.module("app")
    .config(function($locationProvider, $routeProvider) {
        console.log("appRoute.js - config callback");
        // HTML5 모드 활성화 
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });  /* 위의 설정으로 a태그가 더 이상 서버로 요청을 보내지 않음  */

        // 라우트 정의 : URL과 VIEW 연결 
        $routeProvider
            .when("/", {templateUrl: "views/exam01_home.html"})
            .when("/exam02_module_create_find", {templateUrl: "views/exam02_module_create_find.html"})
            .when("/exam03_module_dependency", {templateUrl: "views/exam03_module_dependency.html"})
            .when("/exam04_module_config_run_callback", {templateUrl: "views/exam04_module_config_run_callback.html"})
            .when("/exam05_controller_declaration", {templateUrl: "views/exam05_controller_declaration.html", controller: "exam05Controller"})
            .when("/exam06_scope_property_method", {templateUrl: "views/exam06_scope_property_method.html", controller: "exam06Controller"})
            .otherwise({redirectTo: "/"});
        
    
    
    });
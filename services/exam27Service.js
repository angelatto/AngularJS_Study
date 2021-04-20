angular.module("app")
    .factory("exam27Service", function($http){ 
        // 변수 선언 
        const BASE_URL = "http://localhost:8080/auth";

        // 서비스 객체를 리턴 
        return {
            login: function(user){
                return $http.post(BASE_URL + "/login", user);
            }
        }
    });
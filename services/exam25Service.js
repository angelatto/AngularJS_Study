angular.module("app")
    .factory("exam25Service", function($http){ 
        // 변수 선언 
        const BASE_URL = "http://localhost:8080/products";

        // 서비스 객체를 리턴 
        return {
            list: function(pageNo=1) {
                const promise = $http.get(BASE_URL, {params:{pageNo}});  // x-www-form-urlencoded 방식 
                return promise; // 비동기 처리 
            },
            read : function(pid){
                const promise = $http.get(BASE_URL + "/" + pid);
                return promise;
            },
            create: function(jsonData){  
                const promise = $http.post(BASE_URL, jsonData);
                return promise; 
            },
            update: function(jsonData){  
                const promise = $http.put(BASE_URL, jsonData);
                return promise;
            },
            delete : function(pid){
                return $http.delete(BASE_URL + "/" + pid);
            }
        }
    });
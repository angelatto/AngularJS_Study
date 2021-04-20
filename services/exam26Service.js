angular.module("app")
    .factory("exam26Service", function($http){ 
        // 변수 선언 
        const BASE_URL = "http://localhost:8080/boards";

        // 서비스 객체를 리턴 
        return {
            list: function(pageNo=1) {
                const promise = $http.get(BASE_URL, {params:{pageNo}});
                return promise; // 비동기 처리 
            },
            read : function(bno){
                const promise = $http.get(BASE_URL + "/" + bno);
                return promise;
            },
            battachUrl: function(bno){
                return BASE_URL + "/battach/" + bno;
            },
            create: function(formData){  
                const promise = $http.post(BASE_URL, formData, {headers:{"Content-Type":undefined}});
                return promise;
            },
            update: function(formData){  
                const promise = $http.put(BASE_URL, formData, {headers:{"Content-Type":undefined}});
                return promise;
            },
            delete : function(bno){
                return $http.delete(BASE_URL + "/" + bno);
            }
        }
    });
    /* 반드시 기억 
                멀티파트로 포스트 방식 요청을 보낼 때 
                header가 반드시 있어야 한다. 

                왜? 멀티파트는 각각 필드마다 컨텐트 타입이 있는데 
                하나만 설정해주면 대표로 모든 필드에 적용이 되서, 파일을 첨부할 때 에러가 난다. 
                다른 필드는 text 타입이어도 파일은 안되기 때문에 
                대표 타입을 undefined로 설정해야 한다. 
   */
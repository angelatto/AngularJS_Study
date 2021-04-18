angular.module("app")
// [서비스 선언 방법 1] ---------------------------------
    .factory("counterServiceByFactory", function(){
        // 숨김 데이터 
        let count = 0;
        // 서비스 객체를 리턴 
        return { // 클로저 == 자바스크립트에서 private 성격을 지닌 것 
            addCount: function(){
                count++;
            },
            getCount: function(){
                return count;
            }
        };
    })
// [서비스 선언 방법 2] ---------------------------------
.service("counterServiceByService", function(){
    this.count = 0;
    this.addCount = () => this.count++;
    this.getCount = () => {return this.count};
})
// [서비스 선언 방법 3] ---------------------------------
.provider("counterServiceByProvider", function() {
    /* 
    프로바이더 객체 리턴 (중요 : 서비스 객체가 아님! 실제 서비스 객체는 $get에서 리턴되는 객체이다.*******)
    */
    //숨김 데이터 
    let count = 0;
    return {
        // 서비스 객체의 초기화 함수 
        setCount: function(value){
            count = value;
        },
        $get: function(){
            // 서비스 객체 리턴 
            return {
                addCount: function(){
                    count++;
                },
                getCount: function(){
                    return count;
                }
            };
        }
    };
});
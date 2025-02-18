/*
    배열 : 여러 데이터를 하나의 변수에 저장하고자 할 때 사용
*/

/*
    배열 리터럴 : 
    - 0개 이상의 값을 쉼표로 구분하여 []로 묶어 표현
    - 배열[인덱스]로 요소에 접근 가능, 존재하지 않는 인덱스에 접근하면 undefined 반환
    - 각 요소의 데이터 타입이 모두 달라도 됨
*/
var emptyArray = [];
console.log(emptyArray, typeof emptyArray, emptyArray[0]);

var numbers = [1, 2, 3, false, '5'];
console.log(numbers);

var funcs = [
    function () { console.log('함수1') },
    function () { console.log('함수2') }
];

funcs[0]();

console.log('==============================');

/*
    배열의 요소 추가
    - 배열[인덱스] = 값 : 요소 추가 가능, 지정한 인덱스에 값이 존재하면 수정
    - 뛰어넘은 인덱스 값에는 empty 요소가 추가됨
*/
emptyArray[2] = 10;
console.log(emptyArray, emptyArray[0]);

console.log('==============================');

/*
    배열의 요소 삭제
    - 
*/


console.log('==============================');

/*
    배열의 순회
    - 
*/


console.log('==============================');

/*
    - 
    - 
*/


console.log('==============================');

/*
    배열의 길이 : 
*/


console.log('==============================');

/*
    배열 메서드
*/

/*
    indexOf(element) : 
    - 
    - 
*/


console.log('==============================');

/*
    includes(element) :
    - 
*/


console.log('==============================');

/*
    push(element) :
    - 
*/


console.log('==============================');

/*
    pop() :
    - 
*/


console.log('==============================');

/*
    shift() :
    - 
*/


console.log('==============================');

/*
    reverse() :
    - 
*/


console.log('==============================');

/*
    concat(array or item) : 
    - 
*/


console.log('==============================');

/*
    slice(start, end) : 
    - 
*/


console.log('==============================');

/*
    splice(start, eleteCount, items...) :
    - 
*/





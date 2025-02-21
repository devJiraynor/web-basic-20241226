/*
    promise 객체 : 
    - 해당 객체가 생성된 시점에는 값이 알려지지 않았을 수 있다는 것을 대리하는 대리자
    - 비동기 연산이 종료된 이후에 결과 값과 실패에 대한 처리
    - 상태 :
    - pending: 이행하지 않은 상태, 최초 상태
    - fullfilled: 성공 상태
    - rejected: 실패 상태
*/
const number = 10;

console.log('A Point');

if (number % 2 === 0) console.log('짝수');
else console.log('홀수');

console.log('B Point');

const promise = new Promise((resolve, reject) => {
    if (number % 2 === 0) resolve('성공');
    else reject('실패');
});

console.log(promise);

console.log('C Point');

promise
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log('catch : ' + result);
    });

console.log('D Point');

console.log('==================================================');

/*
    async - await : 
    - 
    - 
    - 
*/



console.log('==================================================');
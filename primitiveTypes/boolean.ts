let isDone: boolean = false;

isDone = true;

console.log(typeof isDone);

// let isNotOk : boolean = new Boolean(true);
//boolean은 primitive 객체이지만 new Boolean은 Wrapper 객체이기 때문에 오류가 발생
//Wrapper 객체로 넣는것 보다는 선언 시에 Boolean으로 설정해주는것이 좋다.

let isOk: Boolean = true;

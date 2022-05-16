"use strict";
//tuple 타입은 앞 뒤로 다른 타입을 대괄호 안에 넣어 배열의 순서와 타입을 맞출 수 있음.
let x;
x = ["hello", 5];
// x = [10, "mark"] //순서가 바뀌므로 에러를 표시한다.
// x[2] = "world";
//현재 0,1까지만 타입이 지정되어있고, 3번째는 undefined인데 undefined에는 값을 할당할 수 없음.
const person = ["Mark", 38];
const [first, second] = person; //분해할당.
//튜플을 통해 순서를 지정해주었기 때문에 first는 string으로 나오고, second는 number로 표시된다.
console.log(first); //Mark
console.log(second); //38;

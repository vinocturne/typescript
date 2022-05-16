"use strict";
//Symbol은 따로 new Symbol로 사용할 수 없고, Symbol함수를 사용해야한다.
//Symbol 함수를 사용하여 symbol타입을 만들 수 있음.
console.log(Symbol("foo") === Symbol("foo"));
//같은 값으로 심볼을 만들었지만 값은 false가 나온다.
// 이는 Symbol 자체가 고유하고 수정불가능한 값을 만들어주기 때문.
// const obj = {
//     sym: "value"
// };
// obj["sym"]
// 위와 같이 obj를 설정할 때에는 누구나 string을 통해 sym 값에 접근 가능하지만
const sym = Symbol();
const obj = {
    [sym]: "value",
};
obj[sym];
//Symbol을 사용하게 되면 위와 같이 작성해야 접근이 가능하기 때문에,
// 접근 제어, 프로퍼티 키로 사용되는 경우가 많음.

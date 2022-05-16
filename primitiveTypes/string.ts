let myName: string = "Mark";

myName = "Anna";

//template string도 가능
//string으로 선언하더라도 `Hello ${myName}`를 통해 string으로 사용

let fullName: string = "Mark Lee";
let age: number = 39;
let sentence: string = `Hello, My Name is ${fullName}, ${age}`;

console.log(sentence);

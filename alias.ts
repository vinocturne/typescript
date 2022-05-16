// Interface랑 비슷한 외형 But 다름

// Interface는 명확한 목적이 있고 객체나 변수의 타입을 지정할 때 사용
// Type Alias는 객체나 변수로 사용되는 것이 아닌 순수하게 타입을 지정하기 위한 변수로 사용될 때 사용

// Primitive, Union Type, Tuple, Function등 이미 지정되어있는 타입의 별칭을 지정
// 새로 만들어내는 타입이 아님.

//Aliasing Primitive

type MyStringType = string;

const str = "world";

let myStr: MyStringType = "hello";
myStr = str;

//Aliasing Union Type
//많이 사용되는 방식

let person3: string | number = 0;
person3 = "Mark";

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "Anna";

//Union Type은 A도 가능하고, B도 가능할 때 쓰이는 타입
//일일이 입력하려면 너무 길어지기 때문에 이를 단순화 시키기 위해 사용

//Aliasing Tuple

let person4: [string, number] = ["Mark", 35];

type PersonTuple = [string, number];

let another2: PersonTuple = ["Anna", 24];

//튜블에 적용하여 여러군데에서 사용 가능하도록 할 수 있음

//Aliasing Function

type EatType = (food: string) => void;

//설정이 없는 경우 null과 undefined는 모든 타입의 서브타입(subTypes)로 존재
//number로 형을 지정하더라도 null 또는 undefined가 들어갈 수 있음.

//이는 실제 코드 구현에 있어서 좋지 않게 작용할 수도 있는데, 이를 방지하기 위해
//컴파일 옵션에서 --strictNullChecks를 사용하면 null과 undefined는 void 혹은 자신에게만 할당 가능해진다.

//모든 타입에서 undefined와 null을 사용 못하도록 막아버리면 이또한 굉장히 불편하기 때문에
//이럴 경우에는 union type을 이용해서 undefined 및 null이 사용 가능한 곳에는 타입을 지정해주는 것이 좋다.

// let MyName: string = null;
// tsconfig의 strict 옵션이 켜져있기 때문에 에러가 발생

// let u:undefined = null;
let v: void = undefined;

let union: string | null = null; //string 또는 null 타입이 들어올 수 있다는 선언

// null타입은 null값만 가질 수 있음.
// null은 typeof로 체크하게되면 object로 출력
// undefined는 값을 할당하지 않은 변수는 undefined라는 값을 가지게 된다.
// null과 다르게 typeof로 타입을 체크하면 undefined로 출력.

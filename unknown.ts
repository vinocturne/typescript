//any가 가진 타입의 불안전성을 해소하기위해 나온 대체제
//모르는 변수의 타입을 묘사해야할 때.
//이전까지는 any가 모르는 타입을 묘사했다면, unknown이 나오면서 any에서 파생되는 문제점을 막을 수 있음.

declare const maybe: unknown;

// const aNumber: number = maybe;
//unknown은 다른 타입에 바로 할당할 수 없다.

if (maybe === true) {
    const aBoolean: boolean = maybe;
    // const aString: string = maybe; //if문 안의 maybe가 true이므로 string 타입에는 들어갈 수 없음.
}

if (typeof maybe === "string") {
    const aString: string = maybe;
    //해당 maybe는 string타입일 경우에만 들어올 수 있기 때문에 string타입으로 지정.
    // const aBoolean: boolean = maybe; //마찬가지로 타입이 string이기 때문에
}

//unknown은 any보다 type-safe한 타입
//any와 같이 아무거나 할당할 수 있지만
//컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나, 타입을 확정해주지 않으면 다른곳에 할당할 수 없고, 사용할 수 없음.
//unknown 타입을 활용하면 runtime error를 줄이는데 도움이 됨.

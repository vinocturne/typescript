//any는 어떤 타입이든 가능한 타입.
//모든 값이 들어올 수도 있기 때문에 any를 정확히 알고 쓰는 것이 중요.

function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("아무거나");
//return이 any로 되기 때문에 이후 해당 변수를 사용할 시 타입에 구애받지않고 모든 활동이 가능해진다.
//따라서 최대한 사용하지 않는 것이 좋다. 사용하게된다면 정말 필요한 곳에 써야한다.

any1.toString(); //any1이 any타입이기 때문에 오류가 뜨지 않는다.

//any는 개체를 통해 계속해서 전파되기 때문에, 편의를 위해 any를 쓰면 안전성이 사라진다.
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;
//any로 설정하게되면 그 이후 코드들은 any때문에 모든 타입이 가능해지기 때문에
//원하는 타입만 적용할 수 없음.

function leakingAny(obj: any) {
    // const a = obj.num; //any의 프로퍼티이기 때문에 num또한 any가 된다.
    const a: number = obj.num; //타입을 지정해주게되면 분기가 막히기 때문에 이후로 Number로 반환된다.
    const b = a + 1; //b또한 any인 a를 받았기 때문에 any가 된다.
    return b;
}

const c = leakingAny({ num: 0 }); //이렇게 해도 c는 any로 지정

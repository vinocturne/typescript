//never는 보통 return에서 사용.
//어떤한 것도 return하지 않는다는 것을 의미
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while (true) {}
}

//never 타입은 모든 타입의 subtype이고, 모든 타입에 할당 가능
//하지만 never에는 어떤 타입이든 할당 불가.(any도 할당 불가)

let a: string = "hello";
if (typeof a !== "string") {
    a;
    //조건문 자체가 a가 스트링이 아닐 경우에만 들어오기 때문에 a는 never로 나옴
}

// let b: string  = 'hello'; 바로 assign하지 않고
declare const b: string | number; //declare로 지정후 string과 number를 받을 수 있도록 유니온을 이용해 작성하게되면
if (typeof b !== "string") {
    b; //b는 string 또는 number여야 하지만 조건문에서 string이 아닌경우에 해당 블럭으로 들어오게되므로
    //b는 number가된다.
}

//never의 활용
//조건부 타입
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

//T라고 하는 타입이 string이라면 {[index: string]}을 지정해주고, 아니라면 never.

type ObjectIndexable = Indexable<{}>; //여기서 {}가 Indexable<T>의 T(제너릭)
//제너릭에 오브젝트를 할당했으니 string이 아니므로 ObjectIndexable은 never 타입이 된다.

// const c: Indexable<{}> = "";
//이런식으로 맞지 않는 타입이 들어가게되면 오류를 발생시킨다.
// string은 never에 선언할 수 없음.

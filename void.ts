//void는 어떤 타입도 가지지 않는 빈 상태를 의미.
//값은 없고 타입만 있어서 void라는 값을 사용할 수는 없음.

//값을 반환하지 않는 undefined를 리턴할 때 사용

function returnVoid(message: string) {
    console.log(message);

    return;
}

const r = returnVoid("리턴 없음");
//여기서 r은 void타입이 된다. 변수를 설정했지만 실제로는
// returnVoid("리턴 없음") 와 같이, 리턴값으로 뭔가를 하겠다는 것이 아닌 그대로 끝내겠다는 의미가 됨.

function returnVoid2(message: string): void {
    console.log(message);
    //void일 때 return 뒤에 올 수 있는 유일한 값은 undefined이다.
    return undefined;
}

returnVoid2("리턴 없음");

//void는 리턴된 무언가를 가져다가 사용할 수 없는 상태가 됨.

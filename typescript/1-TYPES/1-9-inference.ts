{
    //Type Inference 타입 추론 //하지만 타입은 표시하자
    let text: string = 'hello';

    function print(message: string) {
        console.log(message);
    }

    //return number
    function add(x: number, y: number) {
        return x + y;
    }
    //number
    const result = add(1, 2)
}
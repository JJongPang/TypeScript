{
    //Type Assertions 타입 강요
    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    (result as string).length;
    (<string>result).length;


    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 경고

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); //경고

    const button = document.querySelector('class')!;
    button.nodeValue;
}
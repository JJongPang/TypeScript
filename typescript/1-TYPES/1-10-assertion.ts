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

    const numbers = findNumbers()!;
    
    // 값이 있다는 확신
    numbers!.push(2)
}
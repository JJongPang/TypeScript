{
    // Javascript
    // primitive : number, string, boolean, bigint, symbol, null, undefined
    // Object: function, array...

    //number
    const num: number = 1;

    //string
    const str: string = 'Hello';

    //boolean
    const boal: boolean = true;

    //undefined
    let age: number | undefined;    
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    //null
    let person: string | null;

    //unknown(어떤 종류의 데이터를 담을 수 있음)
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    
    // any(어떤 종류의 데이터를 담을 수 있음)
    let anything: any = 0;
    anything = 'hello';

    // void(변수 선언 (X) )
    function print(): void {
        console.log('hello');
        return;
    }

    // never(변수 선언 (X) )
    function throwError(message: string): never {
        //message -> server(log)
        // while(true) {
            
        // }
        throw new Error(message);
    }

    // object
    let obj: object = [1, 2];
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'jonghyeon'});
    acceptSomeObject({animall: 'cat'});
}
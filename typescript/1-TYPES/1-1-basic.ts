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
    let name: number | undefined;    

    //null
    let person: number | null;

    //unknown
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    
    // any
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never
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
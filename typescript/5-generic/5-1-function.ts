{
    function checkNotNullBad(arg: number | null): number {
        if(arg == null) {
            throw new Error('Error');
        }
        return arg;
    }

    function checkNotAnyBad(arg: any | null): any {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNotNumber<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    const number: number = checkNotNumber(123);
    const boal: boolean = checkNotNumber(true);
}
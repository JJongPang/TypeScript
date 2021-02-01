{
    // //Javascript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // //Typescript
    // function tsAdd(num1:number, num2:number): number {
    //     return num1 + num2;
    // }

    // //Javascript
    // function jsFetchNum(id) {
    //     //code...
    //     //code...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // //Typescript
    // function tsFetchNum(id: string): Promise<number> {
    //     //code...
    //     //code...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // Javascript => Typescript
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Jong', 'Hyeon');
    printName('Jong');
    printName('Jong', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    //Rest parameter
    function addNumber(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumber(1, 2));
    console.log(addNumber(1, 2, 3));
}
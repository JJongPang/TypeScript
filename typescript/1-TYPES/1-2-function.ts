{
    // // JavaScript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScriupt
    // function add(num1:number, num2:number): number {
    //     return num1 + num2;
    // }

    // // JavaScript
    // function jsFetchNum(id: string) {
    //     // ..code
    //     // ..code
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript
    // function fecthNum(id: string): Promise<number> {
    //     // ..code
    //     // ..code
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // JavaScript => TypesScript
    // Optional parameter( ex) lastName?: string ) 전달받을수도 있고, 전달받지안아도 되고 갸꾸울~!!

    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Jong','Hyeon');
    printName('Jong');

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4));
}
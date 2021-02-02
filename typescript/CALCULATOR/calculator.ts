/**
 * Let's make a calculator 🧮
 */

type Calculate = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(calculate: Calculate, num1: number, num2: number): number {
    let result: number = 0;
    if(calculate === 'add') {
        result = num1 + num2;
    }else if(calculate === 'substract') {
        result = num1 - num2;
    }else if(calculate === 'multiply') {
        result = num1 * num2;
    }else if(calculate === 'divide') {
        result = num1 / num2;
    }else {
        result = num1 % num2;
    }
    return result;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

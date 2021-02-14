const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachin(beans) {
    this.beans = beans;

    // Instace member level
    // this.makeCoffee = (shots) => {
    //     console.log('making...');
    // };
}

// Prototype member level
CoffeeMachin.prototype.makeCoffee = (shots) => {
    console.log('makeing');
};

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachin.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();

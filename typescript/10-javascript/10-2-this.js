console.log(this); // Window

function simpleFunc() {
    console.log(this);
}

simpleFunc(); // Window

class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    };
}

const counter = new Counter();
counter.increase(); // counter

const caller = counter.increase;
caller(); // undefined

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();

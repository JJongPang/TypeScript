{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        sugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    
    
    // abstract 상속 강조
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7 //class level
        private coffeeBeans: number = 0; // instance(object) level
        
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`shots ++++${shots} 추가`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans~!!!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat() {
            console.log('heating heating up');
        }

        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        clean() {
            console.log('cleaning the machine....');
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number, public readonly seriaNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('steaming milk');
        }

        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }
    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans: number) {
            super(beans);
        }
       protected extract(shots: number): CoffeeCup {
            return {
                shots,
                sugar: true,
            }
        }
    } 

    let maker = new SweetCoffeeMaker(32);
    console.log(maker.makeCoffee(1));

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(32, '123'),
        new SweetCoffeeMaker(32)
    ]

    machines.forEach(machine => {
        console.log('--------------------------');
        machine.makeCoffee(2);
    });
}
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBenas: number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBenas = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        filleCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBenas += beans;
        }

        clean() {
            console.log('cleaning the machine....');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBenas < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBenas -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

         private preheat(): void {
            console.log('HEATING UP... HEATING UP...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CoffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans)    
        }

        private steamMilk(): void {
            console.log( 'Steaming some milk...');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    } 

    const machine = new CoffeeMachine(32);
    const latteMachine = new CoffeLatteMachine(32, 'ssss');
    const coffee = latteMachine.makeCoffee(1);
    console.log(latteMachine.serialNumber);
}
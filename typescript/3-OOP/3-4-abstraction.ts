{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        filleCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBenas: number = 0;

        private constructor(coffeeBeans: number){
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
            // if(this.coffeeBenas < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            //     throw new Error("Not enough coffee beans");
            // }
            // this.coffeeBenas -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            // return {
            //     shots,
            //     hasMilk: false
            // }
        }
    }
    
    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    
    class ProBrista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.filleCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBrista(maker);

    amateur.makeCoffee();
    console.log('-------------');
    pro.makeCoffee();

}
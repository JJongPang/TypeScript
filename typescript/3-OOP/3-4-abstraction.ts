{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    //public
    //private
    //protected 자식 클래스에 접근 가능

    interface CoffeeMaker {
        makerCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makerCoffee(shots: number): CoffeeCup;
        filleCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans: number = 0; //instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makerMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        filleCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat() {
            console.log('Heating Heating~~!!!');
        }

        private extract(shots: number):CoffeeCup {
            console.log(`Pulling Up ${shots}...`);
            return {
                shots,
                hasMilk: false
            }
        }
        makerCoffee(shots: number):CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            // if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            //     throw new Error('Not enough coffee beans!');
            // }
            // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            // return {
            //     shots,
            //     hasMilk: false,
            // }
        }

        clean() {
            console.log('cleaning the machine....');
        }
    }

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
            makeCoffee() {
                const coffee = this.machine.makerCoffee(2);
                console.log(coffee);
            }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker){}
        makerCoffee() {
            const coffee = this.machine.makerCoffee(2);
            console.log(coffee);
            this.machine.filleCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker:CoffeeMachine = CoffeeMachine.makerMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makerCoffee();
}


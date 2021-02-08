{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    //public
    //private
    //protected 상속 후 에도 접근 가능 하자 외부에서는 접근 불가능

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;

    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makerMatchine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMachine(coffeeBeans);
        }

        // makerMatchine(coffeeBeans: number): CoffeeMaker {
        //     return new CoffeeMaker(coffeeBeans);
        // }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...');
        }

        private grindBeans(shots: number) {
            console.log(`Bean for ${shots}`);
            if(this.coffeeBeans < shots *  CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots}`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            // if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            //     throw new Error('Not enough coffee beans!');
            // }
            // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            // return {
            //     shots,
            //     hasMilk: false
            // };
        }
    }

     const maker: CoffeeMachine = CoffeeMachine.makerMatchine(32);
     maker.fillCoffeeBeans(32);
     maker.makeCoffee(2);

     const maker2: CommercialCoffeeMaker = CoffeeMachine.makerMatchine(32);
     maker2.fillCoffeeBeans(32);
     maker2.makeCoffee(2);
}
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    //public
    //private
    //protected 상속 후 에도 접근 가능 하자 외부에서는 접근 불가능

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makerMatchine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }
    }

    const maker = CoffeeMaker.makerMatchine(32);
    maker.fillCoffeeBeans(4);

    console.log(maker);
}
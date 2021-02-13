{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBenas: number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBenas = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBenas < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeeBenas -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

   const maker = new CoffeeMaker(32);
   console.log(maker);
}
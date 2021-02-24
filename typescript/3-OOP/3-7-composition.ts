{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    
    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming some milk....');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class AutomaticSugarMixer {
        private getSuger() {
            console.log('Getting some sugar from candy');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }
        } 
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7 //class level
        private coffeeBeans: number = 0; // instance(object) level
        
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
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

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots`)
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

        clean() {
            console.log('cleaning the machine....');
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number, public readonly seriaNumber: string, private milkFrother: CheapMilkSteamer) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }    
    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans:number, private sugar: AutomaticSugarMixer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee); 
        } 
    
    
    }
    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, private milkFrother: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
            super(beans);;
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.sugar.addSugar(sugarAdded);
        }
    }
}
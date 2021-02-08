{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makerCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans: number = 0; 

        constructor(
            coffeeBeans: number, 
            private milk: MilkFrother, 
            private sugar: SugarProvider
            ) {
            this.coffeeBeans = coffeeBeans
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }

        clean() {
            console.log('cleaning the machine....');
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    //우유 거품기
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steaming some Milk....');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class FancyMilkStemer implements MilkFrother {
        private steamMilk(): void {
            console.log('Fancy Steaming some Milk....');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkStemer implements MilkFrother {
        private steamMilk(): void {
            console.log('Cold Steaming some Milk....');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }


    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    //설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSuger() {
            console.log('sugar sugar from candy');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
           const sugar =  this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }    
        }
    }

    class SugarMixer implements SugarProvider {
        private getSuger() {
            console.log('sugar from jar!!!!!!!!!');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
           const sugar =  this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }    
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // class CaffeLatteMachine extends CoffeeMachine {
    //     //dependence injection
    //     constructor(
    //         beans: number, 
    //         public readonly serialNumer: string, 
    //         private milkFother: MilkFrother,
    //     ) {
    //         super(beans);
    //     }

    //     //오버라이딩
    //     makerCoffee(shots: number): CoffeeCup {
    //         //부모기능 그대로 재사용
    //         const coffee = super.makerCoffee(shots);
    //         return this.milkFother.makeMilk(coffee);
    //     }
    // }

    // class SweetCoffeeMaker extends CoffeeMachine {
    //     constructor(beans:number, private sugar: SugarProvider) {
    //         super(beans);
    //     }
    //     makerCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makerCoffee(shots);
    //         return this.sugar.addSugar(coffee);
    //     }
    // }


    // class SweetCaffeLatteMachine extends CoffeeMachine {
    //     constructor(
    //             private beans: number, 
    //             private milk: MilkFrother,
    //             private sugar: SugarProvider
    //         ) {
    //         super(beans);
    //     }
    //     makerCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makerCoffee(shots);
    //         const sugarAdded = this.sugar.addSugar(coffee);
    //         return this.milk.makeMilk(sugarAdded)
    //         //return this.milk.makeMilk(this.sugar.addSugar(coffee));
    //     }
    // }

    // const machines: CoffeeMaker[] = [
    //     new CoffeeMachine(16),
    //     new CaffeLatteMachine(16, 'Jong-Jong'),
    //     new SweetCoffeeMaker(16),
    //     new CoffeeMachine(16),
    //     new CaffeLatteMachine(16, 'Jong-Jong'),
    //     new SweetCoffeeMaker(16),
    // ];

    // machines.forEach(machines => {
    //     console.log('-------------------------------');
    //     const coffee = machines.makerCoffee(1);
    //     console.log(coffee);
    // });


    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkStemer();
    const coldMilkStemer = new ColdMilkStemer();
    const noMilk = new NoMilk();

    //sugar
    const candySuger = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //machine
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySuger);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
    
    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkStemer, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySuger);
}

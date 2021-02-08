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

        constructor(coffeeBeans: number) {
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
        }

        clean() {
            console.log('cleaning the machine....');
        }
    }


    // 싸구려 우유 거품기
    class CheapMilkSteamer {
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

    //설탕 제조기
    class AutomaticSugarMixer {
        private getSuger() {
            console.log('suger suger');
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
    class CaffeLatteMachine extends CoffeeMachine {
        //dependence injection
        constructor(
            beans: number, 
            public readonly serialNumer: string, 
            private milkFother: CheapMilkSteamer
        ) {
            super(beans);
        }

        //오버라이딩
        makerCoffee(shots: number): CoffeeCup {
            //부모기능 그대로 재사용
            const coffee = super.makerCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans:number, private sugar: AutomaticSugarMixer) {
            super(beans);
        }
        makerCoffee(shots: number): CoffeeCup {
            const coffee = super.makerCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }


    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(
                private beans: number, 
                private milk:CheapMilkSteamer,
                private sugar: AutomaticSugarMixer
            ) {
            super(beans);
        }
        makerCoffee(shots: number): CoffeeCup {
            const coffee = super.makerCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded)
            //return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'Jong-Jong'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'Jong-Jong'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machines => {
        console.log('-------------------------------');
        const coffee = machines.makerCoffee(1);
        console.log(coffee);
    });
}

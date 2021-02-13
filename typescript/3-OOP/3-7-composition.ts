{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Fancy Steaming some milk...');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Cold Steaming some milk...');
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

    // 설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from candy');
            return true;
        }
        
        addSugar(cup:CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }
    
    class SugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from jar');
            return true;
        }
        
        addSugar(cup:CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
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

    // 커피머신
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBenas: number = 0;

        constructor(
            coffeeBeans: number, 
            private milk: MilkFrother, 
            private sugar: SugarProvider
            ) { 
            this.coffeeBenas = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

   



    // CoffeeMachine: implements CoffeeMaker
    // const machines: CoffeeMaker[] = [
    //     new CoffeeMachine(16),
    //     new CoffeLatteMachine(16, 'SSSS'),
    //     new CoffeeMachine(16),
    //     new CoffeeMachine(16),
    //     new CoffeLatteMachine(16, '123123'),
    //     new CoffeeMachine(16),
    // ]

    // machines.forEach(machine => {
    //     console.log('----------------------');
    //     machine.makeCoffee(1);
    // })

       // Milk
       const cheapMilkMaker = new CheapMilkSteamer();
       const fancyMilkMaker = new FancyMilkSteamer();
       const coldMilkMaker = new ColdMilkSteamer();
       const noMilk = new NoMilk(); 
      
       // Sugar
       const candySuger = new CandySugarMixer();
       const sugar = new SugarMixer();
       const noSugar = new NoSugar();

       const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySuger);
       const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
       const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
       const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
       const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySuger);
   
}
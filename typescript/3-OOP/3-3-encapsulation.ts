{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBenas: number = 0;

        private constructor(coffeeBeans: number){
            this.coffeeBenas = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        filleCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBenas += beans;
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
    
    class User {
        get fullName ():string{
            return `${this.firstName} ${this.lastName}`
        } 

        private internalAge = 4;
        
        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if(num < 0) {
                throw new Error('NO NO NO');
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    const user = new User('jong', 'hyeon');
    console.log(user.fullName);
}
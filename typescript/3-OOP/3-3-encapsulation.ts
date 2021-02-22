{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7 //class level
        private coffeeBeans: number = 0; // instance(object) level
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffe(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    let maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    console.log(maker)


    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    let name = new User('jong', 'hyeon');
    console.log(name.fullName);

    name.age = 5;
    console.log(name.age);
}
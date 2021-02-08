{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    //public
    //private
    //protected 자식 클래스에 접근 가능
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans: number = 0; //instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makerMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        filleCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number):CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }
    }
    const maker = CoffeeMaker.makerMachine(32);
    maker.filleCoffeeBeans(42);
    console.log(maker);

    class User {
        //private firstName: string;
        //private lastName: string;
        //fullName: string;
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if(num < 0) {
                throw new Error('Never Never');
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string) {
            //this.firstName = firstName;
            //this.lastName = lastName;
            //this.fullName =`${firstName} ${lastName}`; 
        }
    }
    const user = new User('Jong Hyeon', 'Lee');
    console.log(user.fullName); // Jong Hyeon Lee
    // user.firstName = 'Jong Pang';
    // console.log(user.fullName) //Jong Pang Lee
    console.log(user.age); //4
    user.age = 6;
    console.log(user.age); //6
}
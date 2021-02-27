{
    type Video = {
        title: string;
        author: string;
        description: string;
    }
    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // }

    // type VideoReadOnluy = {
    //     readonly title: string;
    //     readonly author: string;
    //     readonly description: string;
    // }
   
    type Optional<T> =  {
       [P in keyof T]?: T[P]
   }

   type ReadOnly<T> = {
    readonly [P in keyof T] : T[P]
   }

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog',
    }

    type Nullable<T> = {
        [P in keyof T]: T[P] | null
    }

    const obj1: Nullable<Video> = {
        title: null,
        author: null,
        description: null,
    }
 }
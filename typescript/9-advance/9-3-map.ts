{
    type Video = {
        title: string;
        author: string;
    }
    
    type Optional<T> = {
        [P in keyof T]?: T[P]  // for...in
    }
    
    type ReadOnly<T> = {
        readonly [P in keyof T]?: T[P];
    } 
    
    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: '7번방 의선물'
    }
    
    type Animal = {
        name: string;
        age: number;
    }
    
    type AnimalOptional = Optional<Animal>;
    const animalOp: AnimalOptional = {
        name: '초롱이',
    }
    
    animalOp.name = '짱돌';
    
    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'JONG'
    }
    
    // video.author = 'JJONG' // error
    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }
    
    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // }
    type Nullable<T> = {
        [P in keyof T]: T[P] | null;
    }

    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }
}


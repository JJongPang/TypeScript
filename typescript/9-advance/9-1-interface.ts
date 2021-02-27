type PositionType = {
    x: number,
    y: number
}

interface PostionInterface {
    x: number,
    y: number
}

// object 둘다가능
const obj1: PositionType = {
    x: 1,
    y: 1
}

const obj2: PostionInterface = {
    x: 1,
    y: 1
}

// class 둘다가능
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PostionInterface {
    x: number;
    y: number;
}

// Extends
interface ZPositionInterface extends PostionInterface {
    z: number;
}

type ZPositionType = PositionType & { z: number}


// 오직 인터페이스만 결합 가능
interface PositionInterface {
    z: number;
}

// type PositionType = {

// }

// 오직 타입만 가능
type Person = {
    name: string,
    age: number,
}

type Name = Person['name']; // string
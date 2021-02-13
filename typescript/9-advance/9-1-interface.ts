type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}


// object *
const obj1: PositionType = {
    x: 1,
    y: 1
}

const obj2: PositionInterface = {
    x: 2,
    y: 2,
    z: 2
}

// class *
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends
interface ZPostionInterface extends PositionInterface {
    z: number;
}

type ZPositionType = PositionType & {z: number};

// 오직 인터페이스만 merge 가능
interface PositionInterface {
    z: number;
}

// type PositionType {
//     z: number;2
// }

// 오직 타입만 가능 computed properties
type Person = {
    name: string,
    age: number
}

type Name = Person['name'];  //string
type NumberType = number;
type Direction = 'left' | 'right';




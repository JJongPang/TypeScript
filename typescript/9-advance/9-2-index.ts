{
    const obj = {
        name: 'Jong',
    }

    console.log(obj.name);
    console.log(obj['name']);

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

     type Name = Animal['name'] // string
     const text: Name = 'hello';

     type Gender = Animal['gender']; // 'male' 'female'
     const checkGender: Gender = "female";

    type Keys = keyof Animal; // 'name', 'age', 'gender' 
    const key: Keys = 'gender'

    type Person = {
        name: string;
        gender: Animal['gender'];
    }

    const person: Person = {
        name: 'jong',
        gender: 'male'
    }
}
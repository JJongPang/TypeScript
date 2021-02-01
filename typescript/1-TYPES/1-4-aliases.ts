{
    // aliases
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea'
    type Num = number;
    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'Jong',
        age: 12
    }

    //String Literal Types
    type Name = 'name';
    let jongName: Name;
    jongName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
}
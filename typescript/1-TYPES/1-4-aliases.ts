{
    // Type Aliases
    type Text = string;
    const name: Text = 'Hello';

    const address: Text = 'korea';
    
    type Stydent = {
        name: string;
        age: number;
    }

    const student: Stydent = {
        name: 'jong',
        age: 12,
    };

    // String Literal Types
    type Name = 'name';
    let jongName: Name = 'name';

    console.log(jongName);

    
}
{
    //Array
    const fruits: string[] = ['apple', 'orange'];
    const scores: Array<number> = [1, 2, 3];

    // readonly 읽기 전용
    function printArray(fruits: readonly string[]) {

    }

    //Tuple => inserface, type alias, class
    
    let student: [string, number];
    student = ["jong", 123];
    student[0] //name
    student[1] //123

    // 비구조화 할당
    const [name, age] = student;
}
{
    // Intersection Types: And
    type Student  = {
        name: string;
        score: number;
    };

    type Worker = {
        empolyeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.empolyeeId, person.name, person.score, person.work());
    }

    internWork({
        name: 'Jong',
        score: 92,
        empolyeeId: 32,
        work: () => {}
    })
}
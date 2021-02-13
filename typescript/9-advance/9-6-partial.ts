{
    type Todo = {
        title: string;
        description: string;
        label: string;
        priorty: 'height' | 'low';
    }

    //부분 수정
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
        return {
            ...todo,
            ...fieldsToUpdate
        };
    }

    const todo: Todo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priorty: 'height'
    }

    const updated = updateTodo(todo, {priorty: 'low'});
    console.log(updated);
}
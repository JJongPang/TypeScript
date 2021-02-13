interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

type StackNode<T> = {
    //불변성 유지
    readonly value: T;
    readonly next?: StackNode<T>;
}

class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
        return this._size;
    }

    push(value: T) {
        const node: StackNode<T> = {value, next: this.head}
        this.head = node;
        this._size++;
    }

    pop(): T { //nul == undefined null !== undefined
        if(this.head == null) {
            throw new Error('Stack is empty');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
} 

const stack = new StackImpl<string>();
stack.push("안녕");
stack.push('안녕하세요');
stack.push("hey");
stack.push('안녕히');

while(stack.size !== 0) {
    console.log(stack.pop());
}
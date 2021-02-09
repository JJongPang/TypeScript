interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    //불변성 유지
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    get size() {
        return this._size;
    }

    push(value: string) {
        const node: StackNode = {value, next: this.head}
        this.head = node;
        this._size++;
    }

    pop(): string { //nul == undefined null !== undefined
        if(this.head == null) {
            throw new Error('Stack is empty');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
} 

const stack = new StackImpl();
stack.push('안녕');
stack.push('안녕하세요');
stack.push('안녕하셈');
stack.push('안녕히');

while(stack.size !== 0) {
    console.log(stack.pop());
}
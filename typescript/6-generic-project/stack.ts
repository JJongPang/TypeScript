{
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
        
        constructor(private capcity: number){}
        get size() {
            return this._size;
        }
    
        push(value: T) {
            if(this.size === this.capcity) {
                throw new Error('Stack is full!');
            }
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
    
    const stack = new StackImpl<string>(12);
    stack.push('안녕');
    stack.push('안녕하세요');
    stack.push('안녕하셈');
    stack.push('안녕하셈');
    stack.push('안녕하셈');
    
    
    while(stack.size !== 0) {
        console.log(stack.pop());
    }   

    const chekcNumber = new StackImpl<number>(12);
    chekcNumber.push(12);
    chekcNumber.push(134);
    chekcNumber.push(13);
    chekcNumber.push(11);
    chekcNumber.push(5);
    
    
    while(chekcNumber.size !== 0) {
        console.log(chekcNumber.pop());
    }   
}
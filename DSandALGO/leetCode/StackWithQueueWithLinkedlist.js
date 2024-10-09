class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

class myQueue{
    constructor(){
        this.front = null;
        this.back = null;
    }

    push(value){
        let newNode = new ListNode(value);
        
        if(!this.front){
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    pop(){
        if(!this.front){
            return null;
        }
        let poppedNode = this.front;
        this.front = this.front.next;
        
        if (!this.front) {
            this.back = null; 
        }

        return poppedNode.val;
    }

    peek(){
        if(!this.front){
            return null;
        }

        return this.front.val;
    }

    isEmpty(){
        return this.front === null;
    }
}

class myStack{
    constructor(){
        this.queue1 = new myQueue();
        this.queue2 = new myQueue();
    }

    push(val){
        this.queue1.push(val);
    }

    pop(){
        if (this.queue1.isEmpty()) {
            return null;
        }

        while (this.queue1.front && this.queue1.front.next) {
            this.queue2.push(this.queue1.pop());
        }

        let poppedValue = this.queue1.pop();

        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return poppedValue;
    }

    peek(){
        if (this.queue1.isEmpty()) {
            return null;
        }

        while (this.queue1.front && this.queue1.front.next) {
            this.queue2.push(this.queue1.pop());
        }

        let peekedValue = this.queue1.peek();

        this.queue2.push(this.queue1.pop());

        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return peekedValue;
    }

    isEmpty(){
        return this.queue1.isEmpty();
    }
}

let myStackInstance = new myStack();
myStackInstance.push(1);
myStackInstance.push(2);
myStackInstance.push(3);

console.log(myStackInstance.pop()); 
console.log(myStackInstance.peek());
console.log(myStackInstance.pop());
console.log(myStackInstance.isEmpty());
console.log(myStackInstance.pop());
console.log(myStackInstance.isEmpty()); 

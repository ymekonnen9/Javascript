class ListNode{
    constructor(val =0, next = null){
        this.val = val;
        this.next = next;
    }
}

class myStack{
    constructor(){
        this.top = null;
    }

    push(value){
        let newNode = new ListNode(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(!this.top){
            return null;
        }
        let topNode = this.top.val;
        this.top = this.top.next;

        return topNode;
    }

    peek(){
        if(!this.top){
            return null;
        }

        let topNode = this.top;
        return topNode.val;
    }

    isEmpty() {
        return this.top === null;
    }

}


class myQueue{
    constructor(){
        this.stack1 = new myStack();
        this.stack2 = new myStack();
    }

    push(val){
        this.stack1.push(val);
    }

    pop(){

        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();

    }

    peek(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.peek();
    }
}

let myque = new myQueue();
myque.push(1);
myque.push(2);
myque.push(3);
myque.push(4);
myque.push(5);
myque.push(6);


console.log(myque.peek());
console.log(myque.pop());
console.log(myque.peek());
console.log(myque.pop());
console.log(myque.peek());




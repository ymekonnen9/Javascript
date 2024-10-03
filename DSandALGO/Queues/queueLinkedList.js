class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.back = null;
    }
    peek() {
        if(!this.front){
            return null;
        }else{
            const firstNode = this.front;
            return firstNode.val;
        }

    }
  
    enqueue(value) {
        const newNode = new ListNode(value)
        if(!this.back){
            this.back = this.front = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode;
        }
    }
  
    dequeue() {
        if(!this.front){
            return null;
        }
            const firstNode = this.front;
            this.front = this.front.next;
            if (!this.front) {
                this.back = null;
            }
            return firstNode;
        
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue(1);
  console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
  myQueue.enqueue(2);
  console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
  myQueue.enqueue(3);
  console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
  myQueue.dequeue();
  console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 2'
  myQueue.dequeue();
  console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 3'
  myQueue.dequeue();
  console.log('Peek on empty queue:', myQueue.peek());  // logs 'Peek on empty queue: null'
  console.log('`back` on empty queue:', myQueue.back);  // logs '`back` on empty queue: null'
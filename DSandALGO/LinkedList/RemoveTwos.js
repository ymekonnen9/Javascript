class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function deleteTwos(head){
    let curr = head;
    let prev = null;

    if(!head){
        return head;
    }

    while(curr){
        if(curr.val === 2){
            if(!prev){
                head = curr.next;
            }else{
                prev.next = curr.next;
            }
        }else{
            prev = curr;
        }
        curr = curr.next;
    }
          
        return head;
}

function stringfyLinkedList(head){
    let curr = head;
    let result = "";
    while(curr){
        result += curr.val + " -> ";
        curr = curr.next;
    }

    result+= "null";
    return result;
}


const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(2);
head1.next.next.next.next = new ListNode(4);

console.log("Input: ", stringfyLinkedList(head1));
console.log("Output:", stringfyLinkedList(deleteTwos(head1)));
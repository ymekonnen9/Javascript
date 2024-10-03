class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head){
    let prev = null;
    let curr = head;

    if(!head){
        return head;
    }

    while(curr){
        let nextNode = curr.next;

        curr.next = prev;
        prev = curr;

        curr = nextNode;
    }

    return prev;
}

function printList(head){
    let curr = head;
    let result = "";

    while(curr){
        result += curr.val +" -> ";
        curr = curr.next;
    }

    result+= "null"
    return result;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

console.log("Input: ", printList(head1));
console.log("Output:", printList(reverseLinkedList(head1)));
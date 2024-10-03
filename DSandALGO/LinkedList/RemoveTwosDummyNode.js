class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function deleteTwos(head){
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while(curr){
        if(curr.val === 2){
            prev.next = curr.next;
        }else{
            prev = curr;
        }

        curr = curr.next;
    }

    return dummy.next;
}

function stringifyList(head){
    let curr = head;
    let result = "";

    while(curr){
        result += curr.val +" -> ";
        curr = curr.next;
    }

    result += "null";
    return result;
}
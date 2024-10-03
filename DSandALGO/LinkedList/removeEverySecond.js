class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function printLinkedList(head) {
    let currentNode = head;
    let listStr = '';
    while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
    }
    listStr += 'null';
    console.log(listStr);
  }
  
  function createLinkedList(arr) {
    let head = new ListNode(0);
    let current = head;
    arr.forEach(val => {
      current.next = new ListNode(val);
      current = current.next;
    });
    return head.next;
  }

  function removeEverySecondNode(head){
    let curr = head;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let count = 1;

    while(curr){
        if(count === 1 || count%2 !== 0){
            prev = curr;
            curr = curr.next;
        }else if(count % 2 === 0){
            prev.next = curr.next;
            curr = curr.next;
        }
        count++;
    }

    return dummy.next;

  }
  
  let list1 = createLinkedList([1, 2, 3, 4, 5]);
  let list2 = createLinkedList([1, 2]);
  let list3 = createLinkedList([1]);
  let list4 = createLinkedList([1, 2, 3, 4]);
  let list5 = createLinkedList([]);
  
  printLinkedList(removeEverySecondNode(list1)); 
  printLinkedList(removeEverySecondNode(list2));
  printLinkedList(removeEverySecondNode(list3));
  printLinkedList(removeEverySecondNode(list4));
  printLinkedList(removeEverySecondNode(list5)); 
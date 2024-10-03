class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        this.top = new ListNode(value, this.top);
    }

    pop() {
        if (!this.top) {
            return null;
        } else {
            const topNode = this.top;
            this.top = this.top.next;
            return topNode.val;
        }
    }

    peek() {
        if (!this.top) {
            return null;
        } else {
            return this.top.val;
        }
    }

    isEmpty() {
        return this.top === null;
    }
}

function areMatched(str) {
    const myStack = new Stack();
    const openingBrackets = ["(", "[", "{"];
    const closingBrackets = [")", "]", "}"];
    const bracketPairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    let isMatched = true;

    str.split("").forEach(element => {
        if (!isMatched) return;

        if (openingBrackets.includes(element)) {
            myStack.push(element);
        } else if (closingBrackets.includes(element)) {
            let topNode = myStack.peek();
            if (!topNode || topNode !== bracketPairs[element]) {
                isMatched = false; 
            } else {
                myStack.pop();
            }
        }
    });

    return isMatched && myStack.isEmpty();
}

// Test cases
console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false

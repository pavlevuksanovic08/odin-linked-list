

class LinkedList {
    constructor() {
        this.list = null;
    }

    append(value) {
        const node = new Node();
        node.value = value;
        if (this.list == null) {
            this.list = node;
            return;
        }
        const tail = this.tail();
        tail.nextNode = node;
    }

    prepend(value) {
        const node = new Node();
        node.value = value;
        if (this.list == null) {
            this.list = node;
        }
        const head = this.head();
        this.list = node;
        node.nextNode = head;
    }

    size() {
        let i = 0;
        let temp = this.list
        while (temp != null) {
            temp = temp.nextNode;
            i++;
        }
        return i;
    }

    head() {
        return this.list;
    }

    tail() {
        if (this.list === null) return null;
        let temp = this.list;
        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }     
        return temp;
    }

    at(index) {
        let temp = this.list;
        for (let i = 0; i < index; i++) {
            temp = temp.nextNode;
        }
        return temp;
    }

    pop() {
        if (this.list === null) return null;

        if (this.list.nextNode === null) {
            this.list = null;
        }

        let temp = this.list;

        while (temp.nextNode.nextNode !== null) {
            temp = temp.nextNode;
        }
        
        temp.nextNode = null;
    }

    contains(value) {
        let temp = this.list;
        while (temp) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.nextNode;
        }
        return false;
    }

    find(value) {
        let temp = this.list;
        let i = 0;
        while (temp) {
            if (temp.value === value) {
                return i;
            }
            temp = temp.nextNode;
            i++;
        }
        return null;
    }

    toString() {
        let temp = this.list;
        let str = "";
        while (temp) {
            str += `( ${temp.value} ) -> `;
            temp = temp.nextNode;
        }
        str += "null";
        return str;
    }

    insertAt(value, index) {
        const node = new Node();
        node.value = value;
        let temp = this.list;

        if (index > this.size() - 1) return;

        if (index === 0) {
            let temp2 = temp.nextNode;
            temp = node;
            node.nextNode = temp2;
            this.list = temp;
            return;
        }

        for (let i = 0; i < index - 1; i++) {
            temp = temp.nextNode;
        }
        let temp2 = temp.nextNode;
        temp.nextNode = node;
        node.nextNode = temp2;
    }

    removeAt(index) {
        let temp = this.list;

        if (this.list === null) return;

        if (index > this.size() - 1) return;

        if (index === 0) {
            this.list = this.list.nextNode;
            return;
        }
        for (let i = 0; i < index - 1; i++) {
            temp = temp.nextNode;
        }
        temp.nextNode = temp.nextNode.nextNode;
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}


const list = new LinkedList();

console.log("=== APPEND TESTS ===");
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> null


console.log("\n=== PREPEND TESTS ===");
list.prepend("lion");
list.prepend("wolf");
console.log(list.toString()); 
// ( wolf ) -> ( lion ) -> ( dog ) -> ( cat ) -> ( parrot ) -> null


console.log("\n=== SIZE TEST ===");
console.log("Size:", list.size()); // 5


console.log("\n=== HEAD TEST ===");
console.log("Head:", list.head().value); // wolf


console.log("\n=== TAIL TEST ===");
console.log("Tail:", list.tail().value); // parrot


console.log("\n=== AT(index) TEST ===");
console.log("At index 0:", list.at(0).value); // wolf
console.log("At index 2:", list.at(2).value); // dog
console.log("At index 4:", list.at(4).value); // parrot


console.log("\n=== CONTAINS TEST ===");
console.log("Contains 'cat'?", list.contains("cat"));     // true
console.log("Contains 'tiger'?", list.contains("tiger")); // false


console.log("\n=== FIND TEST ===");
console.log("Find 'dog':", list.find("dog")); // index
console.log("Find 'none':", list.find("none")); // null


console.log("\n=== POP TEST ===");
list.pop();
console.log(list.toString()); 
// last element (“parrot”) removed


console.log("\n=== INSERT AT TEST ===");
list.insertAt("snake", 10);
console.log(list.toString());
// snake should appear at index 2


console.log("\n=== REMOVE AT TEST ===");
list.removeAt(0);
console.log(list.toString());
// element at index 1 should be removed
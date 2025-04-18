class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = new Node(data);
    }

    insert(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(){
        if(this.head !== null){
            this.head = this.head.next;
        }
    }

    print(){
        let current = this.head;
        while (current){
            console.log(current.data);
            current = current.next;
        }
    }

}

class TaskQueue extends LinkedList{
    
    constructor(data){
        super(data);
    }

    enqueue(data){
        let current = this.head;
        
        while(current.next !== null){
            current = current.next;
        }

        current.next = new Node(data);
    }

    dequeue(){
        let top = this.head;
        this.delete();
        return top ? top.data : null;
    }

    peek(){
        return this.head ? this.head.data : null;
    }

    isEmpty(){
        return this.head === null;
    }

    size(){
        let current = this.head;
        let total = 0;

        while(current){
            total += 1;
            current = current.next;
        }

        return total;
    }

}

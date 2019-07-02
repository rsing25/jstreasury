

function ListNode(val){
    this.value = val;
    this.next = null;
}
   

function LinkedList(){  
    this.head = null;
}

LinkedList.prototype.push = function(val){
    var node  = new ListNode(val);

    if(!this.head) {
      this.head = node;      
    }
    else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList 
console.log(JSON.stringify(sll.head)); //Object {data: 2, next: Object}
console.log(JSON.stringify(sll.head.next)); //Object {data: 3, next: Object}
console.log(JSON.stringify(sll.head.next.next)); //Object {data: 4, next: null}

function reverse(head) {
  var node = head;
  var previous = null;
  var tmp = null;

  
  while (node && node != null) {
    console.log("node"+JSON.stringify(node));
    console.log("node.next"+JSON.stringify(node.next));
    console.log("previous"+JSON.stringify(previous));
    console.log("tmp"+tmp);

    // save next before we overwrite node.next!
    tmp = node.next;

    
    // reverse pointer
    node.next = previous;

    
    // step forward in the list
    previous = node;

    node = tmp;
  }

  return previous;
}

console.log("---"+JSON.stringify(reverse(sll.head))); 

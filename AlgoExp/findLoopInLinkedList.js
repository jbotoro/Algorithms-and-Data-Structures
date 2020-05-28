class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
	let first = head.next;
	let second = head.next.next;
	while(first !== second){
		first = first.next;
		second = second.next.next;
	}
	first = head;
	while(first !== second){
		first = first.next;
		second = second.next
	}
	return first
}
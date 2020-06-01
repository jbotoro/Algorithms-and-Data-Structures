function reverseLinkedList(head) {
  // Write your code here.
	let p1 = null,
		p2 = head;
	while (p2 !== null){
		const p3 = p2.next;
		p2.next = p1;
		p1 = p2;
		p2 = p3;
	}
	return p1
}
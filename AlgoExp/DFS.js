// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
		
		// push name of current node into array initially
		array.push(this.name);
		
		// for loop so you recursively run dfs on each child in this.children array
		
		for(const child of this.children){
			// call DFS function of Node class on each child and pass in array
			child.depthFirstSearch(array)
			
		}
		
		// return array after DFS has been run on all children
		
		return array;
  }
}
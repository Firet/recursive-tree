export function findNode(nodeName, childToInsert, parentNode) {
  console.log("nodeName", nodeName, "parentNode", parentNode.name);

  let treeWithNewChild = parentNode;
  let nodeWasAdded = false; 

  if (parentNode.name === nodeName) {
    // Check for existing siblings
    for (let i = 0; i < parentNode.children.length; i += 1) {
      if (parentNode.children[i].name === childToInsert.name) {
        console.log("A sibling of the same name was found*************************************");
        return { treeWithNewChild: parentNode, nodeWasAdded: false }; 
      }
    }

    // Add the child if no sibling exists
    parentNode.children.push(childToInsert);
    nodeWasAdded = true;
    return { treeWithNewChild: parentNode, nodeWasAdded: true }; 
  } else {
    // Recursively search through children
    for (let i = 0; i < parentNode.children.length; i += 1) {
      const { treeWithNewChild: updatedChild, nodeWasAdded: childAdded } = 
        findNode(nodeName, childToInsert, parentNode.children[i]); 

      // Update parentNode if a child was added during recursion
      if (childAdded) {
        parentNode.children[i] = updatedChild; 
        nodeWasAdded = true; 
      }
    }
  }

  return { treeWithNewChild: parentNode, nodeWasAdded };
}
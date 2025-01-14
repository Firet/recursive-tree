export function findNode(nodeName, childToInsert, parentNode) {
  console.log("nodeName", nodeName, "parentNode", parentNode.name);
  if (parentNode.name === nodeName) {
    // loop through the children of the parent node to find similar siblings
    for (let i = 0; i < parentNode.children.length; i += 1) {
      if (parentNode?.children[i]?.name === childToInsert?.name) {
        console.log("A sibling of the same name was found");
        // If similar sibilins were found, then return the parent node without adding the child
        return parentNode;
      }
    }
    parentNode.children.push(childToInsert);
  } else {
    for (let i = 0; i < parentNode.children.length; i += 1) {
      findNode(nodeName, childToInsert, parentNode.children[i]);
    }
  }
  return parentNode;
}

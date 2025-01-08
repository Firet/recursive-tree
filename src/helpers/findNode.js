export function findNode(nodeName, childToInsert, parentNode) {
  console.log("nodeName", nodeName, "parentNode", parentNode.name);
  if (parentNode.name === nodeName) {
    parentNode.children.push(childToInsert);
  } else {
    for (let i = 0; i < parentNode.children.length; i += 1) {
      findNode(nodeName, childToInsert, parentNode.children[i]);
    }
  }
  return parentNode;
}
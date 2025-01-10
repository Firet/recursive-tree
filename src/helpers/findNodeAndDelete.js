export function findNodeAndDelete(nodeName, parentNode) {
    // removing the root node will remove all the allChildren, so we start over
    console.log("delete nodeName", nodeName, "parentNode", parentNode);
    if (parentNode.name === nodeName) {
      console.log("parent node deleting");
      return [];
    }
    // we need to inspect inside the allChildren array to find the correct node
    else {
      console.log("deleting some other node");
      for (let i = 0; i < parentNode.children.length; i += 1) {
        if (parentNode.children[i].name === nodeName) {
          parentNode.children.splice(i, 1);
        } else {
          findNodeAndDelete(nodeName, parentNode.children[i]);
        }
      }
    }
    return [parentNode];
  }
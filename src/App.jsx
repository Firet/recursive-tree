import React, { useState } from "react";
import Tree from "./components/Tree";
import Form from "./components/Form";
import { findNodeOriginal } from "./helpers/findNodeOriginal";
import "./styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { findNodeAndDelete } from "./helpers/findNodeAndDelete";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { TreeContext } from "./context/TreeContext";

export default function App() {
  // Get the value from local storage if it exists
  const [treeInLocalStorage, setTreeInLocalStorage] = useLocalStorage(
    "treeInLocalStorage",
    []
  );
  const [removable, setRemovable] = useState(false);
  console.log("top level app", treeInLocalStorage);

  function handleSubmitOriginal(event, incoming) {
    event.preventDefault();

    let { parent } = incoming;
    console.log("incoming", incoming);

    if (treeInLocalStorage.length === 0) {
      setTreeInLocalStorage((oldData) => [...oldData, incoming]);
      console.log("%cFIRST COMPONENT", "color: orange", incoming);
    } else {
      console.log("adding a child");
      let currentData = treeInLocalStorage[0];
      if (!parent) {
        parent = currentData.name;
        incoming.parent = parent;
      }
      console.log("currentData", currentData, "parent", currentData.name);
      // we need to loop throught the current tree to find the matching parent
      // once found, we need to push the new node to the array of children of that parent node
      const newChild = findNodeOriginal(parent, incoming, currentData);
      // When user submits the form, save the node to the local storage
      setTreeInLocalStorage([newChild]);
    }
  }

  function resetTree() {
    setTreeInLocalStorage([]);
  }

  function deleteNode(node) {
    console.log("remove", node);
    let currentData = treeInLocalStorage[0];
    const afterDeleteData = findNodeAndDelete(node, currentData);
    console.log("after Delete", afterDeleteData);
    setTreeInLocalStorage(afterDeleteData);
  }

  return (
    <div className="App">
      <h2>Recursive Tree</h2>

      <div className="toggle-switch">
        <span>Enable individual node deletion </span>
        <Switch
          checked={removable}
          onChange={(event) => setRemovable(event.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <Button variant="contained" type="button" onClick={resetTree}>
        Reset Tree
      </Button>

      <Form handleSubmit={handleSubmitOriginal} />
      <section className="dynamic">
        <TreeContext.Provider value={removable}>
          <Tree dynamicData={treeInLocalStorage} deleteNode={deleteNode} />
        </TreeContext.Provider>
      </section>
    </div>
  );
}
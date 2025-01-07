import React, { useState } from "react";
import Tree from "./components/Tree";
import Form from "./components/Form";
import { findNodeOriginal } from "./helpers/findNodeOriginal";
import "./styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { findNodeAndDelete } from "./helpers/findNodeAndDelete";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { EditableContext } from "./context/EditableContext";

// The dynamic tree takes user input from the form and adds it to state
export default function App() {
  // Get the value from local storage if it exists
  const [treeInLocalStorage, setTreeInLocalStorage] = useLocalStorage(
    "treeInLocalStorage",
    []
  );
  // Set the value received from the local storage to a local state
  const [editable, setEditable] = useState(false);
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
        <span>Enable tree editing</span>
        <Switch
          checked={editable}
          onChange={(event) => setEditable(event.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <Button variant="contained" type="button" onClick={resetTree}>
        Reset Tree
      </Button>

      <Form handleSubmit={handleSubmitOriginal} />
      <section className="dynamic">
        <EditableContext.Provider value={editable}>
          <Tree dynamicData={treeInLocalStorage} deleteNode={deleteNode} />
        </EditableContext.Provider>
      </section>
    </div>
  );
}
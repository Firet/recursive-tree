import React, { useState } from "react";
import Tree from "./components/Tree";
import Form from "./components/Form";
import { findNode } from "./helpers/findNode";
import "./styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { findNodeAndDelete } from "./helpers/findNodeAndDelete";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { TreeContext } from "./context/TreeContext";
import { Snackbar, Alert } from "@mui/material";

export default function App() {
  // Get the tree from local storage if it exists
  const [treeInLocalStorage, setTreeInLocalStorage] = useLocalStorage(
    "treeInLocalStorage",
    [],
  );
  const [isRemovable, setIsRemovable] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  console.log("top level app", treeInLocalStorage);

  function createNewChild(event, incoming) {
    event.preventDefault();

    let { parent } = incoming;
    console.log("incoming", incoming);

    if (treeInLocalStorage.length === 0) {
      setSnackbar({
        open: true,
        message: "New Tree created successfully!",
        severity: "success",
      });
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
      const { treeWithNewChild, nodeWasAdded } = findNode(parent, incoming, currentData);
      // When user submits the form, save the node to the local storage
      setSnackbar({
        open: true,
        message: nodeWasAdded
          ? "Node added successfully!"
          : "Node was not added, a sibling with the same name was found!",
        severity: nodeWasAdded ? "success" : "warning",
      });
      setTreeInLocalStorage([treeWithNewChild]);
    }

  }

  function resetTree() {
    setTreeInLocalStorage([]);
  }

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false })
  };

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
          checked={isRemovable}
          onChange={(event) => setIsRemovable(event.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <Button variant="contained" type="button" onClick={resetTree}>
        Reset Tree
      </Button>

      <Form handleSubmit={createNewChild} />
      <section className="tree-section">
        <TreeContext.Provider value={{ isRemovable, deleteNode }}>
          <Tree treeNodeData={treeInLocalStorage} />
        </TreeContext.Provider>
      </section>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

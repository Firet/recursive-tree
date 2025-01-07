import { useState, useEffect } from "react";
import Tree from "./components/Tree";
import Form from "./components/Form";
import { findNodeOriginal } from "./helpers/findNodeOriginal";
import "./styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { findNodeAndDelete } from "./helpers/findNodeAndDelete";
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

// The dynamic tree takes user input from the form and adds it to state
export default function App() {
  // Get the value from local storage if it exists
  const [treeInLocalStorage, setTreeInLocalStorage] = useLocalStorage(
    "treeInLocalStorage",
    []
  );
  // Set the value received from the local storage to a local state
  const [newData, setNewData] = useState([treeInLocalStorage]);
  const [editable, setEditable] = useState(false);
  
  useEffect(() => {
    resetTree();
  }, []);

  console.log("treeInLocalStorage", treeInLocalStorage);
  console.log("top level app", newData);

  function handleSubmitOriginal(event, incoming) {
    event.preventDefault();

    let { parent } = incoming;
    console.log("incoming", incoming);

    if (newData.length === 0) {
      setNewData((oldData) => [...oldData, incoming]);
      console.log("%cFIRST COMPONENT", "color: orange", incoming);
    } else {
      console.log("adding a child");
      let currentData = newData[0];
      if (!parent) {
        parent = currentData.name;
        incoming.parent = parent;
      }
      console.log("currentData", currentData, "parent", currentData.name);
      // we need to loop throught the current tree to find the matching parent
      // once found, we need to push the new node to the array of children of that parent node
      const newChild = findNodeOriginal(parent, incoming, currentData);
      setNewData([newChild]);
      // When user submits the form, save the node to the local storage
      setTreeInLocalStorage(newChild);
    }
  }

  function resetTree() {
    setNewData([]);
    setTreeInLocalStorage([]);
  }

  function deleteNode(node) {
    console.log("remove", node);
    let currentData = newData[0];
    const afterDeleteData = findNodeAndDelete(node, currentData);
    console.log("after Delete", afterDeleteData);
    setNewData(afterDeleteData);
    setTreeInLocalStorage(afterDeleteData);
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmitOriginal} />
      <section className="dynamic">
        <h2>Recursive Tree</h2>
        <Tree dynamicData={newData} deleteNode={deleteNode} editable={editable} />
      </section>
      <Button variant="contained" type="button" onClick={resetTree}>
        Reset Tree
      </Button>

      <div className="toggle-switch">
      <h4>Enable tree editing</h4>

        <Switch
          checked={editable}
          onChange={(event) => setEditable(event.target.checked)}
          inputProps={{ 'aria-label': 'controlled' }}
        />

      </div>
    </div>
  );
}

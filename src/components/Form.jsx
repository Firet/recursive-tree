import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Form(props) {
  const { handleSubmit } = props;

  const [newName, setNewName] = useState("");
  const [parent, setParent] = useState("");

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          name: newName,
          children: [],
          parent: parent || null,
        })
      }
    >
      <br />
      <TextField
        label="Name"
        variant="standard"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Parent (Optional)"
        variant="standard"
        value={parent}
        onChange={(e) => setParent(e.target.value)}
      />
      <br />
      <Button variant="contained" type="submit" className="add-button">
        Add Node
      </Button>
    </form>
  );
}

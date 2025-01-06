import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Form(props) {
  const { handleSubmit } = props;

  const [newName, setNewName] = React.useState("");
  const [parent, setParent] = React.useState("");

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
      <TextField
        label="Name"
        variant="standard"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        required // Add required prop for validation
      />
      <TextField
        label="Parent (Optional)"
        variant="standard"
        value={parent}
        onChange={(e) => setParent(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
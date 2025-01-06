import React from "react";
import Button from '@mui/material/Button';

export default function ListItem(props) {
  const { item, level, deleteNode, editable } = props;
  console.log("%cInside Listitem", "color: purple", item);
  return (
    <article
      className="listitem"
      style={{
        marginTop: 30 * level + "px"
      }}
    >
      <p>
        {item.name}
      </p>
      {editable && <Button onClick={() => deleteNode(item.name)}>Delete</Button>}
    </article>
  );
}

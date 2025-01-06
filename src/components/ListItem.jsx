import React from "react";

export default function ListItem(props) {
  const { item, level, deleteNode } = props;
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
      <button onClick={() => deleteNode(item.name)}>Delete</button>
    </article>
  );
}

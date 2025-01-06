import React from "react";

export default function ListItem(props) {
  const { item, level } = props;
  console.log("%cInside Listitem", "color: purple", item);
  return (
    <article
      className="listitem"
      style={{
        marginTop: 30 * level + "px"
      }}
    >
      {item.name}
    </article>
  );
}

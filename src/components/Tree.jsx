import React from "react";
import ListItem from "./ListItem";

export default function Tree(props) {
  const { dynamicData, level = 0 } = props;
  console.log("%cinside tree", "color: red", dynamicData, "level", level);
  if (!dynamicData || !dynamicData.length) return null;

  return (
    <div className="level-wrapper">
      {dynamicData.map((item) => (
        <div id={item.name} className="item" key={item.name}>
          <ListItem item={item} level={level} />
          <Tree dynamicData={item.children} level={level + 1} />
        </div>
      ))}
    </div>
  );
}

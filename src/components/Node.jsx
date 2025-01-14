import Button from "@mui/material/Button";
import { useContext } from "react";
import { TreeContext } from "../context/TreeContext";
import CollapsibleCard from "./CollapsibleCard";

export default function Node(props) {
  const { item, level } = props;
  const { isRemovable, deleteNode } = useContext(TreeContext);

  console.log("%cInside Node", "color: purple", item);
  return (
    <article className="node-container">
      <CollapsibleCard
        title={item.name}
        className="node-container"
        style={{
          marginTop: 30 * level + "px",
        }}
      >
        <p>Level is {level}</p>
        {isRemovable && (
          <Button onClick={() => deleteNode(item.name)}>Delete Node</Button>
        )}
      </CollapsibleCard>
    </article>
  );
}

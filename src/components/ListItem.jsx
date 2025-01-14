import Button from "@mui/material/Button";
import { useContext } from "react";
import { TreeContext } from "../context/TreeContext";
import CollapsibleCard from "./CollapsibleCard";

export default function ListItem(props) {
  const { item, level } = props;
  const { isRemovable, deleteNode } = useContext(TreeContext);

  console.log("%cInside Listitem", "color: purple", item);
  return (
    <article className="listitem">
      <CollapsibleCard
        title={item.name}
        className="listitem"
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

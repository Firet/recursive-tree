import Button from '@mui/material/Button';
import { useContext } from 'react';
import { TreeContext } from "../context/TreeContext";

export default function ListItem(props) {
  const { item, level, deleteNode } = props;
    const isRemovable = useContext(TreeContext);
  
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
      {isRemovable && <Button onClick={() => deleteNode(item.name)}>Delete Node</Button>}
    </article>
  );
}
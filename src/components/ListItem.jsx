import Button from '@mui/material/Button';
import { useContext } from 'react';
import { EditableContext } from "../context/EditableContext";

export default function ListItem(props) {
  const { item, level, deleteNode } = props;
    const isEditable = useContext(EditableContext);
  
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
      {isEditable && <Button onClick={() => deleteNode(item.name)}>Delete</Button>}
    </article>
  );
}
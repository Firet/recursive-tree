import ListItem from "./ListItem";

export default function Tree(props) {
  const { treeNodeData, level = 0, deleteNode } = props;
  console.log("%cinside tree", "color: red", treeNodeData, "level", level);

  if (!treeNodeData || !treeNodeData.length) return null;

  return (
    <div className="level-wrapper">
      {treeNodeData.map((item) => (
        <div id={item.name} className="item" key={item.name}>
          <ListItem item={item} level={level} deleteNode={deleteNode} />
          <Tree treeNodeData={item.children} level={level + 1} deleteNode={deleteNode} />
        </div>
      ))}
    </div>
  );
}

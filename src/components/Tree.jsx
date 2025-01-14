import Node from "./Node";

export default function Tree(props) {
  const { treeNodeData, level = 0 } = props;
  console.log("%cinside tree", "color: red", treeNodeData, "level", level);

  if (!treeNodeData || !treeNodeData.length) return null;

  return (
    <div className="level-wrapper">
      {treeNodeData.map((item) => (
        <div id={item.name} className="item" key={item.name}>
          <Node item={item} level={level} />
          <Tree treeNodeData={item.children} level={level + 1} />
        </div>
      ))}
    </div>
  );
}

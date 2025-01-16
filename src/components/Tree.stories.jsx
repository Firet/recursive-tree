import React from "react";
import Tree from "./Tree";
import { TreeContext } from "../context/TreeContext";
import "../styles.css";

export default {
  title: "Components/Tree",
  component: Tree,
  decorators: [
    (story) => (
      <TreeContext.Provider value={{ isRemovable: true, deleteNode: () => {} }}>
        {story()}
      </TreeContext.Provider>
    ),
  ],
  argTypes: {
    treeNodeData: {
      control: { type: "object" },
    },
    level: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => <Tree {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  treeNodeData: [
    { name: "Root Node" },
    { name: "Another Root Node" },
  ],
  level: 0,
};

export const MultiLevel = Template.bind({});
MultiLevel.args = {
  treeNodeData: [
    {
      name: "Root Node",
      children: [
        { name: "Child Node 1" },
        {
          name: "Child Node 2",
          children: [{ name: "Grandchild Node 1" }],
        },
      ],
    },
  ],
  level: 0,
};
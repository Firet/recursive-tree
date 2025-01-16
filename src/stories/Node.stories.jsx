import React from "react";
import Node from "../components/Node";
import { TreeContext } from "../context/TreeContext";

export default {
  title: "Components/Node",
  component: Node,
  decorators: [
    (story) => (
      <TreeContext.Provider value={{ isRemovable: true, deleteNode: () => {} }}>
        {story()}
      </TreeContext.Provider>
    ),
  ],
  argTypes: {
    item: {
      control: { type: "object" },
    },
    level: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => <Node {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  item: { name: "Node Name" },
  level: 1,
};

export const Removable = Template.bind({});
Removable.args = {
  item: { name: "Removable Node" },
  level: 2,
};
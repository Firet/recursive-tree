function Tutorial() {
  return (
    <div
      style={{
        margin: "100px",
      }}
    >
      <h2>How Does it Work? 🏗️</h2>
      <p>
        This is a React application that allows you to create tree-like data
        structures.
      </p>
      <ul>
        <li>
          <strong>Node Creation:</strong> Each node is created using a form
          where the user enters the node's name and selects its parent node.
        </li>
        <li>
          <strong>Tree Structure:</strong> The tree is built hierarchically,
          where each node can have multiple children.
        </li>
        <li>
          <strong>Storage:</strong> The entire tree is saved in the browser's
          local storage for persistence between sessions.
        </li>
        <li>
          <strong>Deletion:</strong> You can delete individual nodes or the
          entire tree.
        </li>
        <li>
          <strong>Configuration:</strong> A toggle switch allows you to enable
          or disable the option to delete individual nodes.
        </li>
        <li>
          <strong>State Management:</strong> We use a context to share
          information about whether nodes can be deleted among different
          components, avoiding the need to pass props unnecessarily.
        </li>
        <li>
          <strong>Learning:</strong> The components include comments and console
          logs to help you better understand the application's logic.
        </li>
      </ul>
    </div>
  );
}

export default Tutorial;

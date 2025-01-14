import { Link } from "react-router";

function Tutorial() {
  return (
    <div>
      <h1>♻️ Recursive Tree</h1>
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
      <Link to="/">Go to tree</Link>
    </div>
  );
}

export default Tutorial;

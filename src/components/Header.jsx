import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <Link to="/tutorial">Tutorial</Link>
    </nav>
  );
}
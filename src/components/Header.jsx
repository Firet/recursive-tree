import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        border: '1px solid orange',
        alignItems: 'center',
        height: '50px',
      }}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
        style={{
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        Home
      </NavLink>

      <Link to="/tutorial"
        style={{
          color: 'black',
          fontWeight: 'bold',
        }}
      >How Does it work?</Link>
    </nav>
  );
}
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ returnToIntro }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-logo" onClick={closeMenu}>
        <img
          src="/images/code-uncode-nav.png"
          alt="Code Uncode"
          className="nav-title-logo"
        />
      </Link>
      <button
        type="button"
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
      <div className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        <NavLink to="/home" className={navClass} onClick={closeMenu}>
          <span className="nav-marker">○</span>
          HOME
        </NavLink>

        <NavLink to="/about" className={navClass} onClick={closeMenu}>
          <span className="nav-marker">△</span>
          ABOUT
        </NavLink>

        <NavLink to="/timetable" className={navClass} onClick={closeMenu}>
          <span className="nav-marker">□</span>
          TIMETABLE
        </NavLink>

        <NavLink to="/rules" className={navClass} onClick={closeMenu}>
          <span className="nav-marker">○</span>
          RULES
        </NavLink>

        <NavLink to="/games" className={navClass} onClick={closeMenu}>
          <span className="nav-marker">△</span>
          GAMES
        </NavLink>

        <button type="button" className="nav-exit" onClick={returnToIntro}>
          <span className="exit-status">○</span>

          <span className="exit-text">EXIT</span>
        </button>

        <Link to="/register" className="nav-register" onClick={closeMenu}>
          REGISTER
          <span>→</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

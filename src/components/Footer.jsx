import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <div className="footer-brand">
            <span>○</span>
            <span>△</span>
            <span>□</span>

            <strong>CODE UNCODE</strong>
          </div>

          <p>DJS CODESTARS × CODE UNCODE 2026</p>
        </div>

        <div className="footer-navigation">
          <Link to="/">HOME</Link>

          <Link to="/about">ABOUT</Link>

          <Link to="/games">GAMES</Link>

          <Link to="/timetable">TIMETABLE</Link>

          <Link to="/rules">RULES</Link>

          <Link to="/register">REGISTER</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 DJS CODESTARS</span>

        <span>PLAYER 456 // GAME ACTIVE</span>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-left">
        <div className="player-tag">
          <span className="player-dot"></span>
          PLAYER 456 // ACTIVE
        </div>

        <p className="hero-small">DJS CODESTARS PRESENTS</p>

        <div className="hero-logo-box">
          <img
            src="/images/code-uncode-title.png"
            alt="Code Uncode"
            className="hero-logo"
          />
        </div>

        <div className="hero-line"></div>

        <h2 className="hero-tagline">CODE. SURVIVE. WIN.</h2>

        <p className="hero-description">
          Enter the coding arena where logic, speed and creativity decide who
          survives.
        </p>

        <div className="hero-buttons">
          <Link to="/games" className="hero-primary">
            ENTER THE GAMES
            <span>→</span>
          </Link>

          <Link to="/about" className="hero-secondary">
            PLAYER BRIEFING
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <span>PLAYERS</span>
            <strong>456</strong>
          </div>

          <div>
            <span>GAMES</span>
            <strong>03</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="status-active">ACTIVE</strong>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="guard-circle"></div>
        <div className="big-symbol symbol-circle">○</div>
        <div className="big-symbol symbol-triangle">△</div>
        <div className="big-symbol symbol-square">□</div>
        <div className="scan-stage">
          <img
            src="/images/final.png"
            alt="Front Man, Player and Guard"
            className="guard-image"
          />
          <div className="scan-line"></div>

          <div className="scan-corner scan-corner-one"></div>
          <div className="scan-corner scan-corner-two"></div>
          <div className="scan-corner scan-corner-three"></div>
          <div className="scan-corner scan-corner-four"></div>

          <div className="character-label front-label">
            <span>01</span>

            <div>
              <strong>FRONT MAN</strong>
              <small>CONTROL</small>
            </div>
          </div>

          <div className="character-label player-label">
            <span>456</span>

            <div>
              <strong>PLAYER</strong>
              <small>IDENTITY UNKNOWN</small>
            </div>
          </div>

          <div className="character-label guard-label">
            <span>△</span>

            <div>
              <strong>GUARD</strong>
              <small>ENFORCEMENT</small>
            </div>
          </div>

          <div className="scan-data">
            <div className="scan-data-header">
              PLAYER SCAN
              <span>● LIVE</span>
            </div>

            <div className="scan-data-row">
              <span>PLAYER ID</span>
              <strong>#456</strong>
            </div>

            <div className="scan-data-row">
              <span>IDENTITY</span>
              <strong>UNKNOWN</strong>
            </div>

            <div className="scan-data-row">
              <span>STATUS</span>
              <strong className="scan-active">ACTIVE</strong>
            </div>

            <div className="scan-data-row">
              <span>THREAT</span>
              <strong className="scan-threat">34%</strong>
            </div>

            <div className="scan-meter">
              <div className="scan-meter-fill"></div>
            </div>
          </div>
        </div>

        <div className="system-card">
          <span className="system-label">SYSTEM STATUS</span>

          <div className="system-row">
            <span>GAME SERVER</span>
            <strong>ONLINE</strong>
          </div>

          <div className="system-row">
            <span>PLAYER</span>
            <strong>#456</strong>
          </div>

          <div className="system-row">
            <span>THREAT</span>
            <strong>NORMAL</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

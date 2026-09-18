import { Link } from "react-router-dom";

function About() {
  const attributes = [
    {
      id: "01",
      name: "LOGIC",
      icon: "</>",
      score: 82,
      color: "cyan",
      text: "Read patterns, understand conditions and make the right decision.",
    },
    {
      id: "02",
      name: "SPEED",
      icon: "◷",
      score: 74,
      color: "yellow",
      text: "Think quickly when the timer starts working against you.",
    },
    {
      id: "03",
      name: "DEBUGGING",
      icon: "⌁",
      score: 91,
      color: "pink",
      text: "Find the mistake before one broken line eliminates your solution.",
    },
    {
      id: "04",
      name: "CODE BUILDING",
      icon: "⬡",
      score: 86,
      color: "green",
      text: "Arrange logic and code in the correct structure.",
    },
  ];

  const protocol = [
    {
      number: "01",
      symbol: "○",
      title: "REGISTER",
      text: "Secure your player slot.",
      color: "pink",
    },
    {
      number: "02",
      symbol: "△",
      title: "ENTER",
      text: "Step into the coding arena.",
      color: "cyan",
    },
    {
      number: "03",
      symbol: "□",
      title: "PLAY",
      text: "Complete all three games.",
      color: "yellow",
    },
    {
      number: "04",
      symbol: "○",
      title: "SURVIVE",
      text: "Advance through every challenge.",
      color: "green",
    },
  ];

  const reasons = [
    {
      number: "01",
      title: "TEST YOUR LIMITS",
      text: "Solve challenges under pressure and discover how quickly you can think.",
    },
    {
      number: "02",
      title: "BUILD REAL SKILLS",
      text: "Practice logic, debugging, speed and structured code building.",
    },
    {
      number: "03",
      title: "FACE OTHER PLAYERS",
      text: "Compete alongside coders with different strategies and strengths.",
    },
    {
      number: "04",
      title: "SURVIVE THE FINAL GAME",
      text: "Clear the rounds and prove that your code can survive.",
    },
  ];

  return (
    <main className="about-page">
      {/* =====================================================
          CLASSIFIED HERO
      ====================================================== */}

      <section className="about-briefing">
        <div className="about-briefing-grid">
          <div className="about-briefing-left">
            <div className="about-file-row">
              <span>PLAYER BRIEFING // FILE 456</span>

              <div className="about-access">
                <span className="about-access-dot"></span>
                ACCESS GRANTED
              </div>
            </div>

            <p className="about-eyebrow">CLASSIFIED INFORMATION</p>

            <h1 className="about-main-title">
              ABOUT
              <span> THE GAME</span>
            </h1>

            <div className="about-title-line"></div>

            <p className="about-intro-text">
              CODE UNCODE turns coding into a survival arena where logic, speed,
              debugging and creativity decide who advances.
            </p>

            <div className="about-code-transmission">
              <code>
                <span>&gt;</span> player.initialize()
              </code>
              <code>
                <span>&gt;</span> logic.check()
              </code>
              <code>
                <span>&gt;</span> debug.execute()
              </code>
              <code>
                <span>&gt;</span> survival.status = UNKNOWN
              </code>
            </div>
          </div>

          <div className="about-briefing-scan" aria-hidden="true">
            <div className="about-scan-ring"></div>
            <div className="about-scan-crosshair about-scan-crosshair-horizontal"></div>
            <div className="about-scan-crosshair about-scan-crosshair-vertical"></div>

            <div className="about-scan-figure">
              <div className="about-scan-head"></div>
              <div className="about-scan-body"></div>
            </div>

            <span className="about-scan-status">SCAN // VERIFIED</span>
            <strong>456</strong>
            <small>CODER // ACTIVE</small>
          </div>

          <div className="about-briefing-terminal">
            <div className="terminal-corner terminal-top-left"></div>
            <div className="terminal-corner terminal-top-right"></div>
            <div className="terminal-corner terminal-bottom-left"></div>
            <div className="terminal-corner terminal-bottom-right"></div>

            <div className="terminal-scan-line"></div>

            <div className="terminal-header">
              <span>BRIEFING TERMINAL</span>
              <strong>● LIVE</strong>
            </div>

            <div className="terminal-row">
              <span>PLAYER</span>
              <strong>#456</strong>
            </div>

            <div className="terminal-row">
              <span>STATUS</span>
              <strong className="terminal-green">ACTIVE</strong>
            </div>

            <div className="terminal-row">
              <span>CLEARANCE</span>
              <strong>PLAYER</strong>
            </div>

            <div className="terminal-row">
              <span>GAMES</span>
              <strong className="terminal-yellow">03</strong>
            </div>

            <div className="terminal-row">
              <span>SURVIVAL</span>
              <strong className="terminal-pink">UNKNOWN</strong>
            </div>

            <div className="terminal-progress">
              <span></span>
            </div>

            <div className="terminal-system-note">
              SYSTEM READY // AWAITING ROUND 01
            </div>
          </div>
        </div>

        <div className="about-briefing-route">
          <div className="about-route-node about-route-cyan">
            <span>○</span>
            <strong>THINK</strong>
          </div>

          <i></i>

          <div className="about-route-node about-route-pink">
            <span>△</span>
            <strong>DEBUG</strong>
          </div>

          <i></i>

          <div className="about-route-node about-route-yellow">
            <span>□</span>
            <strong>BUILD</strong>
          </div>

          <i></i>

          <div className="about-route-node about-route-green">
            <span>456</span>
            <strong>SURVIVE</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION OBJECTIVE - CINEMATIC SQUID GAME x CODE UNCODE
      ====================================================== */}

      <section className="about-objective-cinematic">
        <div className="objective-layout">
          <div className="objective-main-content">
            <div className="objective-section-label">
              <span>01</span>

              <p>MISSION // OBJECTIVE</p>

              <div></div>
            </div>

            <div className="objective-heading">
              <p>MISSION // 001</p>

              <h2>
                YOUR <span>OBJECTIVE</span>
              </h2>
            </div>

            <div className="objective-inline-list">
              <span>CODE</span>
              <strong>//</strong>
              <span>DEBUG</span>
              <strong>//</strong>
              <span>BUILD</span>
              <strong>//</strong>
              <span>SURVIVE</span>
            </div>

            <p className="objective-description">
              You have entered a coding arena where every decision matters. Each
              round tests a different ability, and every challenge pushes you
              closer to the final game.
            </p>

            <div className="objective-skill-row">
              <article className="objective-skill-card objective-code-card">
                <div className="objective-skill-icon">&lt;/&gt;</div>

                <h3>CODE.</h3>

                <p>
                  Turn ideas
                  <br />
                  into solutions.
                </p>

                <span>01</span>
              </article>

              <article className="objective-skill-card objective-debug-card">
                <div className="objective-skill-icon">⌁</div>

                <h3>DEBUG.</h3>

                <p>
                  Find what
                  <br />
                  others miss.
                </p>

                <span>02</span>
              </article>

              <article className="objective-skill-card objective-build-card">
                <div className="objective-skill-icon">◇</div>

                <h3>BUILD.</h3>

                <p>
                  Create
                  <br />
                  what matters.
                </p>

                <span>03</span>
              </article>

              <article className="objective-skill-card objective-survive-card">
                <div className="objective-skill-icon">⬡</div>

                <h3>SURVIVE.</h3>

                <p>
                  Adapt.
                  <br />
                  Improve. Win.
                </p>

                <span>04</span>
              </article>
            </div>
          </div>

          <div className="objective-parameters">
            <div className="objective-parameters-heading">
              <span>MISSION PARAMETERS</span>
            </div>

            <div className="objective-parameter-row">
              <div>
                <span className="objective-parameter-icon">◷</span>
                <p>TIME</p>
              </div>

              <strong>LIMITED</strong>
            </div>

            <div className="objective-parameter-row">
              <div>
                <span className="objective-parameter-icon">◇</span>
                <p>GAMES</p>
              </div>

              <strong>03</strong>
            </div>

            <div className="objective-parameter-row">
              <div>
                <span className="objective-parameter-icon">▥</span>
                <p>ATTEMPTS</p>
              </div>

              <strong>01</strong>
            </div>

            <div className="objective-parameter-row">
              <div>
                <span className="objective-parameter-icon">≋</span>
                <p>DIFFICULTY</p>
              </div>

              <strong>RISING</strong>
            </div>

            <div className="objective-parameter-row">
              <div>
                <span className="objective-parameter-icon">◎</span>
                <p>STATUS</p>
              </div>

              <strong className="objective-active-status">● ACTIVE</strong>
            </div>

            <Link to="/games" className="objective-accept-button">
              ACCEPT THE CHALLENGE
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      {/* =====================================================
          PLAYER FILE
      ====================================================== */}

      <section className="player-file-section section-shell">
        <div className="about-section-label">
          <span>02</span>
          PLAYER DATABASE
        </div>

        <div className="player-file">
          <div className="player-file-visual">
            <div className="player-file-corner file-corner-one"></div>
            <div className="player-file-corner file-corner-two"></div>
            <div className="player-file-corner file-corner-three"></div>
            <div className="player-file-corner file-corner-four"></div>

            <div className="player-scan-line"></div>

            <span className="player-symbol">○</span>

            <strong>456</strong>

            <p>PLAYER FILE</p>

            <small>IDENTITY // UNKNOWN</small>
          </div>

          <div className="player-file-data">
            <div className="player-file-heading">
              <div>
                <span>DATABASE RECORD</span>
                <h2>PLAYER // 456</h2>
              </div>

              <span className="player-record-status">● ACTIVE</span>
            </div>

            <div className="player-data-grid">
              <div>
                <span>PLAYER ID</span>
                <strong>#456</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>CODER</strong>
              </div>

              <div>
                <span>IDENTITY</span>
                <strong>UNKNOWN</strong>
              </div>

              <div>
                <span>GAMES</span>
                <strong>03</strong>
              </div>

              <div>
                <span>CLEARANCE</span>
                <strong>GRANTED</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="player-green">ACTIVE</strong>
              </div>
            </div>

            <div className="threat-level">
              <div className="threat-heading">
                <span>THREAT LEVEL</span>
                <strong>42%</strong>
              </div>

              <div className="threat-bar">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          PLAYER ATTRIBUTES - SKILLS UNDER TEST
      ====================================================== */}

      <section className="about-skills-arena">
        <div className="skills-test-shade"></div>

        <div className="skills-test-shell">
          <div className="skills-test-header">
            <div>
              <div className="skills-test-label">
                <span>03</span>
                <p>PLAYER ANALYSIS</p>
                <i></i>
              </div>

              <p className="skills-test-kicker">PLAYER ATTRIBUTES // 456</p>

              <h2 className="skills-test-title">
                SKILLS UNDER <span>TEST</span>
              </h2>

              <p className="skills-test-intro">
                Every game targets a different coding ability. There is no
                single skill that guarantees survival.
              </p>
            </div>

            <div className="skills-test-mantra">
              <span>SAME</span>
              <span>GAMES.</span>
              <span>DIFFERENT</span>
              <span>SKILLS.</span>
              <span>HIGHER</span>
              <span>STAKES.</span>
              <i></i>
            </div>
          </div>

          <div className="skills-test-grid">
            {attributes.map((attribute) => (
              <article
                className={`skills-test-card skills-test-card-${attribute.color}`}
                key={attribute.id}
              >
                <div className="skills-test-card-top">
                  <span className="skills-test-number">{attribute.id}</span>
                  <strong>{attribute.score}%</strong>
                </div>

                <div className="skills-test-icon">{attribute.icon}</div>

                <h3>{attribute.name}</h3>

                <p>{attribute.text}</p>

                <div className="skills-test-meter">
                  <span style={{ width: `${attribute.score}%` }}></span>
                </div>
              </article>
            ))}
          </div>

          <div className="skills-test-footer">
            <div className="skills-test-footer-left">
              <i></i>
              <span>PLAY · LEARN · COMPETE · SURVIVE</span>
            </div>

            <div className="skills-test-footer-right">
              <i></i>
              <span>MORE THAN A HACKATHON.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRANSMISSION
      ====================================================== */}

      <section className="about-transmission">
        <div className="transmission-line"></div>

        <p>// TRANSMISSION RECEIVED</p>

        <h2>
          EVERY LINE OF CODE
          <span> IS A DECISION.</span>
        </h2>

        <small>PLAYER 456 // MESSAGE COMPLETE</small>

        <div className="transmission-line"></div>
      </section>
    </main>
  );
}

export default About;

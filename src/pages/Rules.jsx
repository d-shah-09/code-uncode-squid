import { Link } from "react-router-dom";

const rules = [
  {
    number: "01",
    title: "PLAYER REGISTRATION",
    text: "Every participant must complete registration before the announced deadline.",
    result: "ENTRY DENIED",
    color: "cyan",
  },
  {
    number: "02",
    title: "FOLLOW THE TIMER",
    text: "Every coding round must be completed within the allotted time.",
    result: "ROUND ENDS",
    color: "yellow",
  },
  {
    number: "03",
    title: "NO PLAGIARISM",
    text: "Copied code or unfair practices can result in immediate elimination.",
    result: "DISQUALIFICATION",
    color: "pink",
  },
  {
    number: "04",
    title: "VALID SUBMISSIONS",
    text: "Solutions must follow the format and programming requirements announced for each round.",
    result: "SUBMISSION REJECTED",
    color: "green",
  },
  {
    number: "05",
    title: "RESPECT THE GAME",
    text: "Participants must follow instructions provided by the Code Uncode organizing team.",
    result: "ORGANIZER REVIEW",
    color: "purple",
  },
  {
    number: "06",
    title: "FINAL DECISION",
    text: "The decision of the organizers and judges will be final.",
    result: "DECISION FINAL",
    color: "pink",
  },
];

function Rules() {
  return (
    <main className="rules-page">
      {/* =====================================================
          PLAYER CONTRACT DESK
      ====================================================== */}

      <section className="rules-contract-desk">
        <div className="contract-desk-grid"></div>
        <div className="contract-desk-glow"></div>

        <div className="contract-desk-shell">
          <div className="contract-desk-heading">
            <div>
              <p>PLAYER HANDBOOK // CONTRACT 456</p>

              <h1>
                GAME <span>RULES.</span>
              </h1>
            </div>

            <div className="contract-desk-state">
              <span>○ △ □</span>
              <strong>READ BEFORE ENTRY</strong>
            </div>
          </div>

          <div className="contract-desk-layout">
            {/* LEFT - PLAYER FILE */}
            <aside className="contract-player-file">
              <div className="contract-player-file-top">
                <span>PLAYER FILE</span>
                <strong>● ACTIVE</strong>
              </div>

              <div className="contract-player-portrait">
                <img
                  src="/images/player-456.png"
                  alt="Player 456"
                  className="contract-player-image"
                />

                <div className="contract-player-scan"></div>

                <div className="contract-player-image-label">PLAYER // 456</div>
              </div>

              <div className="contract-player-number">456</div>

              <div className="contract-player-data">
                <div>
                  <span>STATUS</span>
                  <strong>ACTIVE</strong>
                </div>

                <div>
                  <span>VIOLATIONS</span>
                  <strong>00</strong>
                </div>

                <div>
                  <span>RULES</span>
                  <strong>06 / 06</strong>
                </div>

                <div>
                  <span>CLEARANCE</span>
                  <strong>PENDING</strong>
                </div>
              </div>

              <div className="contract-player-code">
                <span>PLAYER_456</span>
                <i></i>
                <span>CODE_UNCODE</span>
              </div>
            </aside>

            {/* RIGHT - PHYSICAL CONTRACT PAPER */}
            <div className="contract-paper-wrap">
              <div className="contract-paper-clip contract-paper-clip-left"></div>
              <div className="contract-paper-clip contract-paper-clip-right"></div>

              <article className="contract-paper">
                <div className="contract-paper-header">
                  <div>
                    <span>CODE UNCODE // 2026</span>
                    <h2>PLAYER CONTRACT</h2>
                  </div>

                  <div className="contract-paper-symbols">○ △ □</div>
                </div>

                <p className="contract-paper-intro">
                  By entering the arena, Player 456 agrees to follow every
                  condition listed below. Any violation may affect
                  participation.
                </p>

                <div className="contract-paper-rules">
                  {rules.map((rule) => (
                    <div
                      className={`contract-paper-rule contract-paper-rule-${rule.color}`}
                      key={rule.number}
                    >
                      <div className="contract-paper-rule-copy">
                        <div className="contract-paper-rule-title">
                          <span className="contract-paper-rule-number">
                            {rule.number}
                          </span>

                          <h3>{rule.title}</h3>
                        </div>

                        <p>{rule.text}</p>

                        <small>STATUS // {rule.result}</small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contract-paper-signature">
                  <div>
                    <span>PLAYER SIGNATURE</span>
                    <i></i>
                    <strong>PLAYER 456</strong>
                  </div>

                  <div className="contract-paper-stamp">
                    <span>REVIEW</span>
                    <strong>PENDING</strong>
                  </div>
                </div>

                <div className="contract-paper-footer">
                  <span>READ. CODE. SURVIVE.</span>
                  <span>FILE // 456</span>
                </div>
              </article>
            </div>
          </div>

          <div className="contract-desk-bottom">
            <span>○</span>
            <i></i>
            <span>△</span>
            <i></i>
            <span>□</span>
            <strong>THE SAME RULES APPLY TO EVERY PLAYER.</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          CODE INTEGRITY WARNING
      ====================================================== */}

      <section className="rules-integrity">
        <div className="rules-integrity-shell">
          <div className="rules-warning-symbol">△</div>

          <div className="rules-integrity-copy">
            <p>RED FLAG // CODE INTEGRITY</p>

            <h2>
              YOUR CODE MUST
              <span>BE YOURS.</span>
            </h2>

            <p className="rules-integrity-text">
              Copied solutions, unauthorized assistance or unfair practices may
              result in elimination from the competition.
            </p>
          </div>

          <div className="rules-scan-panel">
            <div className="rules-scan-heading">
              <span>INTEGRITY SCAN</span>
              <strong>● ACTIVE</strong>
            </div>

            <div className="rules-scan-row">
              <span>CODE SOURCE</span>
              <strong>MONITORED</strong>
            </div>

            <div className="rules-scan-row">
              <span>PLAYER</span>
              <strong>#456</strong>
            </div>

            <div className="rules-scan-row">
              <span>THREAT LEVEL</span>
              <strong className="rules-contract-yellow">WATCH</strong>
            </div>

            <div className="rules-scan-line">
              <div></div>
            </div>

            <small>SCAN STATUS // RUNNING</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAYER ACKNOWLEDGEMENT
      ====================================================== */}

      <section className="rules-acceptance">
        <div className="rules-acceptance-box">
          <p>PLAYER CONTRACT // 456</p>

          <div className="rules-acceptance-symbols">
            <span>○</span>
            <span>△</span>
            <span>□</span>
          </div>

          <h2>
            DO YOU UNDERSTAND
            <span>THE RULES?</span>
          </h2>

          <div className="rules-acceptance-line"></div>

          <p className="rules-acceptance-copy">
            By continuing, you agree to enter CODE UNCODE under the rules and
            instructions announced by the organizing team.
          </p>

          <div className="rules-acceptance-buttons">
            <Link to="/register" className="rules-accept-button">
              ACCEPT THE RULES <strong>→</strong>
            </Link>

            <Link to="/games" className="rules-games-button">
              VIEW THE GAMES
            </Link>
          </div>

          <small>STATUS // AWAITING PLAYER RESPONSE</small>
        </div>
      </section>
    </main>
  );
}

export default Rules;

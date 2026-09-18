import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Home() {
  return (
    <main className="home-page">
      <Hero />

      {/* =====================================================
          01 - PLAYER FILE
      ====================================================== */}

      <section className="home-player-file">
        <div className="home-section-strip">
          <div>
            <span>01.</span>
            PLAYER FILE // 456
          </div>
        </div>

        <div className="home-player-file-layout">
          <div className="home-player-intro">
            <p className="home-player-kicker">SELECTED TO PLAY.</p>

            <div className="home-player-number-wrap">
              <strong className="home-player-big-number">456</strong>
            </div>

            <div className="home-player-copy-line"></div>

            <h3>
              NOT JUST A PLAYER.
              <span>A PROBLEM SOLVER.</span>
            </h3>

            <p className="home-player-description">
              Selected for logic, speed, debugging and survival. Now prove you
              can make it through every game.
            </p>
          </div>

          <div className="home-player-scan">
            <div className="home-scan-corner home-scan-corner-one"></div>
            <div className="home-scan-corner home-scan-corner-two"></div>
            <div className="home-scan-corner home-scan-corner-three"></div>
            <div className="home-scan-corner home-scan-corner-four"></div>

            <span className="home-scan-label">SCAN COMPLETE</span>

            <div className="home-scan-line"></div>

            <div className="home-player-scan-image-box">
              <img
                src="/images/player-scan.png"
                alt="Player 456"
                className="home-player-scan-image"
              />

              <div className="home-player-scan-id">PLAYER 456</div>
            </div>
          </div>

          <div className="home-player-profile">
            <div className="home-player-profile-title">
              <span>PLAYER PROFILE</span>
              <strong>● ACTIVE</strong>
            </div>

            <div className="home-profile-row">
              <span>PLAYER ID</span>
              <strong>#456</strong>
            </div>

            <div className="home-profile-skill">
              <span>LOGIC</span>
              <div>
                <i style={{ width: "90%" }}></i>
              </div>
              <strong>90%</strong>
            </div>

            <div className="home-profile-skill">
              <span>SPEED</span>
              <div>
                <i style={{ width: "80%" }}></i>
              </div>
              <strong>80%</strong>
            </div>

            <div className="home-profile-skill">
              <span>DEBUGGING</span>
              <div>
                <i style={{ width: "85%" }}></i>
              </div>
              <strong>85%</strong>
            </div>

            <div className="home-profile-skill">
              <span>CREATIVITY</span>
              <div>
                <i style={{ width: "88%" }}></i>
              </div>
              <strong>88%</strong>
            </div>

            <div className="home-profile-row">
              <span>BUILD</span>
              <strong>HUMAN v1.0</strong>
            </div>

            <div className="home-profile-row">
              <span>STATUS</span>
              <strong className="home-profile-active">ACTIVE</strong>
            </div>

            <p className="home-profile-message">
              “SAME SKILLS. <span>BIGGER STAKES.</span>”
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 - THE THREE GAMES
      ====================================================== */}

      <section className="home-games-showcase">
        <div className="home-section-strip">
          <div>
            <span>02.</span>
            THE THREE GAMES
          </div>
        </div>

        <div className="home-games-cinematic-grid">
          <Link
            to="/games#game-one"
            className="home-cinematic-game home-cinematic-game-one"
          >
            <img
              src="/images/game-red-green.jpg"
              alt="Red Code Green Code"
              className="home-cinematic-game-image"
            />

            <div className="home-cinematic-game-overlay"></div>

            <div className="home-cinematic-game-content">
              <div className="home-cinematic-game-number">
                <strong>01</strong>
                <span>○ ●</span>
              </div>

              <h3>
                RED CODE
                <span>GREEN CODE</span>
              </h3>

              <p>
                React to the signal and submit correct code before the timer
                runs out.
              </p>

              <div className="home-cinematic-game-bottom">
                <span>▮ SKILL</span>
                <strong>SPEED</strong>
              </div>
            </div>

            <div className="home-cinematic-game-arrow">→</div>
          </Link>

          <Link
            to="/games#game-two"
            className="home-cinematic-game home-cinematic-game-two"
          >
            <img
              src="/images/game-dalgona.jpg"
              alt="Debug Dalgona"
              className="home-cinematic-game-image"
            />

            <div className="home-cinematic-game-overlay"></div>

            <div className="home-cinematic-game-content">
              <div className="home-cinematic-game-number">
                <strong>02</strong>
                <span>△</span>
              </div>

              <h3>
                DEBUG
                <span>DALGONA</span>
              </h3>

              <p>
                Find the hidden bug without breaking the logic. One wrong fix
                can eliminate the solution.
              </p>

              <div className="home-cinematic-game-bottom">
                <span>▮ SKILL</span>
                <strong>DEBUGGING</strong>
              </div>
            </div>

            <div className="home-cinematic-game-arrow">→</div>
          </Link>

          <Link
            to="/games#game-three"
            className="home-cinematic-game home-cinematic-game-three"
          >
            <img
              src="/images/game-glass-bridge.jpg"
              alt="Glass Bridge Logic"
              className="home-cinematic-game-image"
            />

            <div className="home-cinematic-game-overlay"></div>

            <div className="home-cinematic-game-content">
              <div className="home-cinematic-game-number">
                <strong>03</strong>
                <span>□</span>
              </div>

              <h3>
                GLASS BRIDGE
                <span>LOGIC</span>
              </h3>

              <p>
                Choose the correct algorithmic path. Not every solution will
                survive the test cases.
              </p>

              <div className="home-cinematic-game-bottom">
                <span>▮ SKILL</span>
                <strong>PROBLEM SOLVING</strong>
              </div>
            </div>

            <div className="home-cinematic-game-arrow">→</div>
          </Link>
        </div>

        <p className="home-games-image-note">
          GAME FILES // CLICK A GAME TO ENTER ITS ARENA
        </p>
      </section>

      {/* =====================================================
    03 - CONTROL ROOM PROGRESSION
===================================================== */}

      <section className="home-control-room-cinematic">
        <div className="home-section-strip">
          <div>
            <span>03.</span>
            CONTROL ROOM PROGRESSION
          </div>

          <small>YOUR JOURNEY THROUGH THE GAMES.</small>
        </div>

        <div className="control-room-cinematic-scene">
          {/* dark overlay for readability */}
          <div className="control-room-cinematic-shade"></div>

          {/* =================================================
        STAGE 01
    ================================================= */}

          <div className="control-room-stage control-room-stage-one">
            <span className="control-room-stage-label">REGISTRATION // 01</span>

            <div className="control-room-stage-icon">▤</div>

            <h3>REGISTER</h3>

            <p>✓ Create account</p>
            <p>✓ Verify details</p>
            <p>✓ Read the rules</p>
          </div>

          {/* =================================================
        STAGE 02
    ================================================= */}

          <div className="control-room-stage control-room-stage-two">
            <span className="control-room-stage-label">QUALIFIER // 02</span>

            <div className="control-room-stage-icon">&lt;/&gt;</div>

            <h3>QUALIFY</h3>

            <p>✓ Solve initial challenges</p>
            <p>✓ Get on the leaderboard</p>
            <p>✓ Top players advance</p>
          </div>

          {/* =================================================
        STAGE 03
    ================================================= */}

          <div className="control-room-stage control-room-stage-three">
            <span className="control-room-stage-label">MAIN ROUND // 03</span>

            <div className="control-room-stage-icon">○△□</div>

            <h3>PLAY</h3>

            <p>✓ Play the three games</p>
            <p>✓ Earn points</p>
            <p>✓ Survive the competition</p>
          </div>

          {/* =================================================
        STAGE 04
    ================================================= */}

          <div className="control-room-stage control-room-stage-four">
            <span className="control-room-stage-label">FINAL GAME // 04</span>

            <div className="control-room-stage-icon">🏆</div>

            <h3>WIN</h3>

            <p>✓ Top coders face off</p>
            <p>✓ One final challenge</p>
            <p>✓ Be the last one standing</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 - SURVIVAL REWARDS
      ====================================================== */}

      <section className="home-rewards-vault">
        <div className="home-section-strip">
          <div>
            <span>04.</span>
            SURVIVAL REWARDS / SYSTEM STATUS
          </div>
        </div>

        <div className="home-rewards-layout">
          <div className="home-reward-copy">
            <h2>
              BIGGER
              <span>THAN A SCORE.</span>
            </h2>

            <h3>
              SKILLS TODAY.
              <span>OPPORTUNITIES TOMORROW.</span>
            </h3>

            <p>
              Top performers get recognition, opportunities, merchandise and
              more. It is not just a game. It is your next step.
            </p>
          </div>

          <div className="home-piggy-vault">
            {/* top system label */}
            <div className="piggy-vault-status">
              <span></span>
              PRIZE VAULT // ACTIVE
            </div>

            {/* piggy bank */}
            <div className="piggy-bank-frame">
              <div className="piggy-scan-corner piggy-corner-one"></div>
              <div className="piggy-scan-corner piggy-corner-two"></div>
              <div className="piggy-scan-corner piggy-corner-three"></div>
              <div className="piggy-scan-corner piggy-corner-four"></div>

              <img
                src="/images/piggy-bank-money.png"
                alt="Code Uncode reward piggy bank"
                className="piggy-bank-image"
              />

              <div className="piggy-money-glow"></div>

              <div className="piggy-vault-value">
                <small>REWARD POOL</small>

                <strong>₹50,000+</strong>

                <span>PRIZES // GOODIES // OPPORTUNITIES</span>
              </div>
            </div>
          </div>

          <div className="home-reward-status">
            <p>REWARD POOL</p>

            <h3>INR 50,000+</h3>

            <span>PRIZES / GOODIES / OPPORTUNITIES</span>

            <div className="home-reward-system">
              <div>
                <strong>456</strong>
                <span>REGISTERED PLAYERS</span>
              </div>

              <div>
                <strong>03</strong>
                <span>GAMES</span>
              </div>

              <div>
                <strong>●</strong>
                <span>ONLINE SERVER</span>
              </div>

              <div>
                <strong>99.9%</strong>
                <span>UPTIME</span>
              </div>
            </div>

            <small>“GOOD CODERS GO FURTHER.”</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 - PLAYER CONTRACT / RULES PREVIEW
      ====================================================== */}

      <section className="home-player-contract">
        <div className="home-section-strip">
          <div>
            <span>05.</span>
            PLAYER CONTRACT // RULES PREVIEW
          </div>
          <small>SAME RULES. A DIFFERENT ARENA.</small>
        </div>

        <div className="player-contract-layout">
          {/* =================================================
        LEFT SIDE
    ================================================= */}

          <div className="player-contract-scene">
            <div className="contract-scene-grid"></div>

            {/* neon symbols */}

            <div className="contract-neon-symbols">
              <span>○</span>
              <span>△</span>
              <span>□</span>
            </div>

            {/* heading */}

            <div className="contract-main-copy">
              <p>RULES // 2026</p>

              <h2>
                SAME
                <span>GAME.</span>
                <strong>
                  DIFFERENT
                  <br />
                  PLAYERS.
                </strong>
              </h2>

              <div className="contract-pink-line"></div>

              <h3>
                READ. UNDERSTAND.
                <span>SURVIVE.</span>
              </h3>
            </div>
          </div>

          {/* =================================================
        RIGHT SIDE
    ================================================= */}

          <div className="player-contract-rules">
            {/* RULE 01 */}

            <article className="contract-paper contract-paper-one">
              <div className="contract-paper-clip"></div>

              <div className="contract-paper-heading">
                <strong>01</strong>

                <span className="contract-rule-icon">◷</span>
              </div>

              <h3>FOLLOW THE TIMER</h3>

              <p>
                Complete challenges within the given time. No extra attempts.
              </p>

              <div className="contract-paper-bottom">
                <span></span>

                <strong>GAME ON</strong>
              </div>
            </article>

            {/* RULE 02 */}

            <article className="contract-paper contract-paper-two">
              <div className="contract-paper-clip"></div>

              <div className="contract-paper-heading">
                <strong>02</strong>

                <span className="contract-rule-icon">△</span>
              </div>

              <h3>NO PLAGIARISM</h3>

              <p>Original code only. Copying leads to disqualification.</p>

              <div className="contract-paper-bottom">
                <span></span>

                <strong>BE ORIGINAL</strong>
              </div>
            </article>

            {/* RULE 03 */}

            <article className="contract-paper contract-paper-three">
              <div className="contract-paper-clip"></div>

              <div className="contract-paper-heading">
                <strong>03</strong>

                <span className="contract-rule-icon">□</span>
              </div>

              <h3>VALID SUBMISSIONS</h3>

              <p>Your code must run and pass every required test case.</p>

              <div className="contract-paper-bottom">
                <span></span>

                <strong>MAKE IT WORK</strong>
              </div>
            </article>

            {/* RULE 04 */}

            <article className="contract-paper contract-paper-four">
              <div className="contract-paper-clip"></div>

              <div className="contract-paper-heading">
                <strong>04</strong>

                <span className="contract-rule-icon">✓</span>
              </div>

              <h3>FINAL DECISION</h3>

              <p>The judges' decision is final. No appeals after evaluation.</p>

              <div className="contract-paper-bottom">
                <span></span>

                <strong>RESPECT THE GAME</strong>
              </div>
            </article>

            {/* QUOTE */}

            <div className="contract-fair-play">
              <span>“</span>

              <p>GOOD CODERS PLAY FAIR.</p>

              <div></div>

              <small>
                CODE UNCODE
                <strong>2026</strong>
              </small>
            </div>

            <Link to="/rules" className="contract-full-rules-link">
              VIEW FULL PLAYER CONTRACT →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL INVITATION - KEEP
      ====================================================== */}

      <section className="home-final-invitation">
        <p className="home-label">FINAL DECISION // PLAYER 456</p>

        <div className="final-invitation-card">
          <div className="final-invitation-symbols">
            <span>○</span>
            <span>△</span>
            <span>□</span>
          </div>

          <small>YOUR NUMBER IS</small>

          <strong>456</strong>

          <h2>
            ACCEPT
            <span> THE GAME?</span>
          </h2>

          <div className="final-invitation-divider"></div>

          <Link to="/register" className="final-invitation-main">
            △ ACCEPT ENTRY →
          </Link>

          <Link to="/rules" className="final-invitation-secondary">
            ○ READ THE RULES
          </Link>
        </div>

        <span className="final-invitation-status">
          STATUS // AWAITING PLAYER
        </span>
      </section>
    </main>
  );
}

export default Home;

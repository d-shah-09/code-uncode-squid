const timeline = [
  {
    id: "001",
    stage: "STEP 01",
    symbol: "○",
    title: "REGISTRATIONS OPEN",
    subtitle: "ENTRY PHASE",
    description:
      "Secure your player slot and take your first step into the CODE UNCODE arena.",
    date: "TBA",
    time: "09:00 AM",
    status: "ACTIVE",
    access: "GRANTED",
    color: "cyan",
    image: "/images/register-open.jpg",
  },

  {
    id: "002",
    stage: "STEP 02",
    symbol: "△",
    title: "REGISTRATION CLOSES",
    subtitle: "ACCESS LOCK",
    description:
      "This is your last chance to enter. No new players beyond this point.",
    date: "TBA",
    time: "11:59 PM",
    status: "UPCOMING",
    access: "PENDING",
    color: "yellow",
    image: "/images/register-closes.jpg",
  },

  {
    id: "003",
    stage: "STEP 03",
    symbol: "□",
    title: "QUALIFIER ROUND",
    subtitle: "FIRST ELIMINATION",
    description:
      "Prove your skills in challenge tasks to earn your spot in the main event.",
    date: "TBA",
    time: "10:00 AM",
    status: "LOCKED",
    access: "LOCKED",
    color: "pink",
    image: "/images/qualifier-round.jpg",
  },

  {
    id: "004",
    stage: "STEP 04",
    symbol: "○",
    title: "MAIN EVENT",
    subtitle: "SURVIVAL ROUND",
    description:
      "Compete with the best. Solve, build and survive through advanced coding challenges.",
    date: "TBA",
    time: "09:00 AM",
    status: "LOCKED",
    access: "LOCKED",
    color: "green",
    image: "/images/main-event.jpg",
  },

  {
    id: "456",
    stage: "STEP 05",
    symbol: "★",
    title: "THE FINAL GAME",
    subtitle: "FINAL ACCESS",
    description:
      "Only the strongest coders reach the end. Final phase information unlocks for surviving players.",
    date: "TBA",
    time: "04:00 PM",
    status: "CLASSIFIED",
    access: "RESTRICTED",
    color: "purple",
    image: "/images/final-game.jpg",
    final: true,
  },
];

const progressSteps = [
  {
    number: "01",
    title: "ENTRY",
    active: true,
  },

  {
    number: "02",
    title: "QUALIFIER",
    active: false,
  },

  {
    number: "03",
    title: "MAIN EVENT",
    active: false,
  },

  {
    number: "04",
    title: "FINAL",
    active: false,
  },
];

function TimelinePage() {
  return (
    <main className="timetable-page">
      <section className="timetable-hero">
        <div className="timetable-hero-grid"></div>

        <div className="timetable-hero-content">
          {/* LEFT */}

          <div className="timetable-hero-left">
            <div className="timetable-file-line">
              <span>EVENT ROUTE // PLAYER 456</span>

              <strong>● ROUTE LOADED</strong>
            </div>

            <p className="timetable-kicker">TIMETABLE // GAME PROGRESSION</p>

            <h1 className="timetable-title">
              SURVIVAL
              <span>ROUTE</span>
            </h1>

            <p className="timetable-intro">
              Every player follows the same path. Each stage must be cleared
              before the next phase becomes available.
            </p>

            {/* NEXT PHASE */}

            <div className="timetable-next-phase">
              <span>NEXT PHASE</span>

              <strong>REGISTRATION CLOSES</strong>

              <small>DATE // TBA</small>
            </div>
          </div>

          {/* RIGHT CONTROL PANEL */}

          <div className="timetable-current-panel">
            <div className="timetable-corner timetable-corner-one"></div>

            <div className="timetable-corner timetable-corner-two"></div>

            <div className="timetable-corner timetable-corner-three"></div>

            <div className="timetable-corner timetable-corner-four"></div>

            <div className="timetable-panel-heading">
              <span>CURRENT PHASE</span>

              <strong>● ACTIVE</strong>
            </div>

            <div className="timetable-current-number">01</div>

            <div className="timetable-panel-row">
              <span>PHASE</span>

              <strong>REGISTRATION</strong>
            </div>

            <div className="timetable-panel-row">
              <span>PLAYER</span>

              <strong>#456</strong>
            </div>

            <div className="timetable-panel-row">
              <span>ACCESS</span>

              <strong className="timetable-green">GRANTED</strong>
            </div>

            <div className="timetable-panel-row">
              <span>TOTAL PHASES</span>

              <strong>05</strong>
            </div>

            <div className="timetable-panel-progress">
              <div></div>
            </div>

            <small>ROUTE PROGRESS // 20%</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAYER PROGRESS
      ====================================================== */}

      <section className="timetable-progress-section">
        <div className="timetable-section-shell">
          <div className="timetable-section-label">
            <span>01</span>
            PLAYER PROGRESS
          </div>

          <div className="timetable-progress-header">
            <div>
              <p>PLAYER 456 // CHECKPOINT STATUS</p>

              <h2>
                ROUTE
                <span> PROGRESS</span>
              </h2>
            </div>

            <strong>20%</strong>
          </div>

          <div className="timetable-progress-track">
            <div className="timetable-progress-line">
              <div></div>
            </div>

            {progressSteps.map((step) => (
              <div
                key={step.number}
                className={
                  step.active
                    ? "timetable-progress-step active"
                    : "timetable-progress-step"
                }
              >
                <span className="timetable-progress-dot"></span>

                <small>{step.number}</small>

                <strong>{step.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GAME ROUTE
      ====================================================== */}

      <section className="timetable-route-section">
        <div className="timetable-section-shell">
          <div className="timetable-section-label">
            <span>02</span>
            GAME ROUTE
          </div>

          <div className="timetable-route-heading">
            <div>
              <p>PHASE SEQUENCE // 001 → 456</p>

              <h2>
                SURVIVAL
                <span> PATH</span>
              </h2>
            </div>

            <p>
              Active stages are available now. Upcoming and locked phases unlock
              as the event progresses.
            </p>
          </div>

          <div className="timetable-route-layout">
            {/* TIMELINE */}

            <div className="timetable-route">
              {timeline.map((event, index) => (
                <article
                  key={event.id}
                  className={
                    event.final
                      ? `timetable-stage timetable-stage-${event.color} timetable-final-stage`
                      : `timetable-stage timetable-stage-${event.color}`
                  }
                >
                  {/* LARGE NUMBER */}

                  <div className="timetable-stage-number">{event.id}</div>

                  {/* TRACK */}

                  <div className="timetable-stage-track">
                    <div className="timetable-stage-symbol">{event.symbol}</div>

                    {index !== timeline.length - 1 && (
                      <div className="timetable-stage-line"></div>
                    )}
                  </div>

                  {/* STAGE CARD */}

                  <div className="timetable-stage-card">
                    <div className="timetable-stage-card-inner">
                      <div className="timetable-stage-thumb">
                        <img src={event.image} alt={event.title} />

                        <div className="timetable-stage-thumb-overlay"></div>
                      </div>

                      <div className="timetable-stage-content">
                        <div className="timetable-stage-top">
                          <div>
                            <span>
                              {event.stage} // {event.id}
                            </span>

                            <small>{event.subtitle}</small>
                          </div>

                          <strong
                            className={`timetable-stage-status status-${event.status.toLowerCase()}`}
                          >
                            {event.status}
                          </strong>
                        </div>

                        <h3>{event.title}</h3>

                        <p>{event.description}</p>

                        <div className="timetable-stage-meta">
                          <div>
                            <span>DATE</span>

                            <strong>{event.date}</strong>
                          </div>

                          <div>
                            <span>TIME</span>

                            <strong>{event.time}</strong>
                          </div>

                          <div>
                            <span>ACCESS</span>

                            <strong>{event.access}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* =================================================
                EVENT CONTROL
            ================================================= */}

            <aside className="timetable-control">
              <div className="timetable-control-heading">
                <span>EVENT CONTROL</span>

                <strong>● ONLINE</strong>
              </div>

              <div className="timetable-control-block">
                <span>CURRENT STAGE</span>

                <strong>REGISTRATION</strong>
              </div>

              <div className="timetable-control-block">
                <span>NEXT EVENT</span>

                <strong>REGISTRATION CLOSE</strong>
              </div>

              <div className="timetable-control-block">
                <span>TOTAL PHASES</span>

                <strong>05</strong>
              </div>

              <div className="timetable-control-block">
                <span>PLAYER</span>

                <strong>#456</strong>
              </div>

              {/* SYSTEM LOG */}

              <div className="timetable-system-log">
                <p>SYSTEM LOG</p>

                <div>
                  <span>[09:01]</span>
                  PLAYER CONNECTED
                </div>

                <div>
                  <span>[09:03]</span>
                  ROUTE LOADED
                </div>

                <div>
                  <span>[--:--]</span>
                  NEXT PHASE PENDING
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL GAME
      ====================================================== */}

      <section className="timetable-final-access">
        <div className="timetable-final-number">456</div>

        <div className="timetable-final-content">
          <p>FINAL ACCESS // CLASSIFIED</p>

          <div className="timetable-final-symbols">
            <span>○</span>

            <span>△</span>

            <span>□</span>
          </div>

          <h2>
            FINAL
            <span>GAME</span>
          </h2>

          <div className="timetable-final-line"></div>

          <p className="timetable-final-copy">
            Only qualified players may enter. Final phase information will be
            released when access is granted.
          </p>

          <div className="timetable-final-meta">
            <div>
              <span>DATE</span>

              <strong>TBA</strong>
            </div>

            <div>
              <span>ACCESS</span>

              <strong>RESTRICTED</strong>
            </div>

            <div>
              <span>PLAYER</span>

              <strong>#456</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TimelinePage;

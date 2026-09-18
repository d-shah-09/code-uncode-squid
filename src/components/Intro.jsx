function Intro({ startGame }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      startGame();
    }
  };
  return (
    <section className="intro">
      <div className="intro-circle circle-one"></div>
      <div className="intro-circle circle-two"></div>
      <div className="symbols">
        <span>○</span>
        <span>△</span>
        <span>□</span>
      </div>
      <p className="present-text">DJS CODESTARS PRESENTS</p>
      <h1 className="intro-title">
        CODE<span> UNCODE</span>
      </h1>
      <p className="intro-subtitle">YOU HAVE BEEN SELECTED</p>
      <div
        className="intro-invitation"
        onClick={startGame}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Enter Code Uncode"
      >
        <div className="invitation-card">
          <div className="invitation-front">
            <div className="invitation-shapes">
              <span>○</span>
              <span>△</span>
              <span>□</span>
            </div>
            <p>PLAYER INVITATION</p>
          </div>
          <div className="invitation-back">
            <p className="invitation-player">PLAYER 456</p>
            <h3>
              ACCEPT
              <span> THE GAME?</span>
            </h3>
            <div className="invitation-line"></div>
            <p className="invitation-year">CLICK TO ENTER</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;

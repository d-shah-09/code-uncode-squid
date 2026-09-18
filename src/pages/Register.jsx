function Register() {
  return (
    <section className="register-page">
      <div className="register-background-symbol symbol-one">○</div>

      <div className="register-background-symbol symbol-two">△</div>

      <div className="register-background-symbol symbol-three">□</div>

      <div className="register-content">
        <p className="register-label">FINAL CALL // PLAYER REGISTRATION</p>

        <div className="register-symbols">○ △ □</div>

        <h1>
          READY TO
          <span> ENTER?</span>
        </h1>

        <p className="register-copy">
          Your coding mission starts here. Register yourself and prepare to
          enter the Code Uncode arena.
        </p>

        <div className="registration-card">
          <div className="registration-details">
            <p>PLAYER INVITATION</p>

            <h2>
              REGISTRATIONS
              <span> ARE OPEN.</span>
            </h2>

            <div className="register-data">
              <div>
                <span>EVENT</span>
                <strong>CODE UNCODE 2026</strong>
              </div>

              <div>
                <span>HOST</span>
                <strong>DJS CODESTARS</strong>
              </div>

              <div>
                <span>DEADLINE</span>
                <strong>TBA</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="registration-open">● OPEN</strong>
              </div>
            </div>

            <a href="#" className="register-main-button">
              REGISTER NOW →
            </a>
          </div>

          <div className="qr-area">
            <img
              src="/images/register-qr.jpeg"
              alt="Code Uncode registration QR"
              className="registration-qr"
            />
            <p>SCAN TO REGISTER</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

import { useEffect, useState } from "react";

const CORRECT_ANSWER = "22";

function GameOne() {
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [eliminationStage, setEliminationStage] = useState(0);
  const [eliminationReason, setEliminationReason] = useState("");

  useEffect(() => {
    if (result !== null) return;

    if (timeLeft === 0) {
      setEliminationReason("timeout");
      setResult("eliminated");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, result]);

  useEffect(() => {
    if (result !== "eliminated") return;

    setEliminationStage(0);

    const stageOne = setTimeout(() => {
      setEliminationStage(1);
    }, 1500);

    const stageTwo = setTimeout(() => {
      setEliminationStage(2);
    }, 3500);

    const stageThree = setTimeout(() => {
      setEliminationStage(3);
    }, 6000);

    return () => {
      clearTimeout(stageOne);
      clearTimeout(stageTwo);
      clearTimeout(stageThree);
    };
  }, [result]);

  const checkAnswer = (answer) => {
    if (answer === CORRECT_ANSWER) {
      setResult("survived");
    } else {
      setEliminationReason("wrong");
      setResult("eliminated");
    }
  };

  const resetGame = () => {
    setResult(null);
    setTimeLeft(60);
    setEliminationStage(0);
    setEliminationReason("");
  };

  const formattedTime = String(timeLeft).padStart(2, "0");
  const redLight = result === "eliminated" || timeLeft <= 10;

  return (
    <section className="game-one">
      <div className="game-one-top">
        <div>
          <p className="game-label">GAME 001</p>

          <h2>
            RED CODE
            <span> GREEN CODE</span>
          </h2>
        </div>

        <div className="game-symbol">○</div>
      </div>

      <div className="game-arena">
        {/* LEFT SIDE */}

        <div className="game-info">
          <div
            className={
              redLight
                ? "green-light danger-light game-one-red-light"
                : "green-light"
            }
          >
            <span></span>
            {redLight ? "RED LIGHT" : "GREEN LIGHT"}
          </div>

          <p className="game-message">
            {result === "eliminated"
              ? "Movement stopped. Player access has been terminated."
              : "Solve the code before time runs out."}
          </p>

          <div className="timer-box">
            <span>TIME REMAINING</span>

            <strong
              className={redLight ? "timer-danger game-one-timer-stopped" : ""}
            >
              00 : {formattedTime}
            </strong>
          </div>
        </div>

        {/* CODING CARD */}

        <div
          className={
            result === "eliminated"
              ? "coding-card eliminated-card"
              : "coding-card"
          }
        >
          <div className="code-header">
            <span>
              {result === "eliminated"
                ? "system://player_456"
                : "challenge_001.py"}
            </span>

            <div>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          {/* ACTIVE QUESTION */}

          {result === null && (
            <>
              <p className="question">What is the output of this code?</p>

              <pre className="code-block">
                {`x = 3
total = 0

for i in range(1, 5):
    if i % 2 == 0:
        total += i * x
    else:
        total += i

print(total)`}
              </pre>

              <div className="answer-grid">
                <button onClick={() => checkAnswer("18")}>18</button>
                <button onClick={() => checkAnswer("20")}>20</button>
                <button onClick={() => checkAnswer("22")}>22</button>
              </div>
            </>
          )}

          {/* SURVIVED */}

          {result === "survived" && (
            <div className="result survived">
              <span>✓</span>

              <div>
                <p>PLAYER 456 // GAME 001</p>
                <h3>YOU SURVIVED.</h3>
              </div>

              <button onClick={resetGame}>PLAY AGAIN</button>
            </div>
          )}

          {/* ELIMINATION SEQUENCE */}

          {result === "eliminated" && (
            <div className="game-one-elimination">
              <div className="game-one-elimination-symbols">
                <span>○</span>
                <span>△</span>
                <span>□</span>
              </div>

              {eliminationStage === 0 && (
                <div className="game-one-elimination-stage game-one-elimination-red">
                  <small>GAME 001 // SIGNAL CHANGE</small>
                  <h3>RED LIGHT</h3>
                  <p>Player movement detected. Challenge input locked.</p>
                </div>
              )}

              {eliminationStage === 1 && (
                <div className="game-one-elimination-stage game-one-elimination-warning">
                  <small>CONTROL ROOM // FAILURE DETECTED</small>
                  <h3>
                    {eliminationReason === "timeout"
                      ? "TIME EXPIRED"
                      : "INCORRECT OUTPUT"}
                  </h3>
                  <p>
                    {eliminationReason === "timeout"
                      ? "The challenge timer reached zero before a valid answer was submitted."
                      : "The submitted output does not match the expected result."}
                  </p>
                </div>
              )}

              {eliminationStage === 2 && (
                <div className="game-one-elimination-stage game-one-elimination-player">
                  <small>PLAYER STATUS // UPDATED</small>
                  <h3>
                    PLAYER 456
                    <span>ELIMINATED.</span>
                  </h3>
                  <div className="game-one-elimination-line"></div>
                </div>
              )}

              {eliminationStage >= 3 && (
                <div className="game-one-elimination-stage game-one-elimination-final">
                  <small>ROUND 001 // RED CODE GREEN CODE</small>
                  <h3>ACCESS TERMINATED</h3>

                  <div className="game-one-elimination-file">
                    PLAYER_456 // STATUS: ELIMINATED
                  </div>

                  <div className="game-one-elimination-actions">
                    <button onClick={resetGame}>TRY AGAIN</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GameOne;

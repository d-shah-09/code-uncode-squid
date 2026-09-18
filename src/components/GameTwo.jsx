import { useState } from "react";

function GameTwo() {
  const [result, setResult] = useState(null);

  const checkAnswer = (answer) => {
    if (answer === "loop-condition") {
      setResult("survived");
    } else {
      setResult("eliminated");
    }
  };

  const resetGame = () => {
    setResult(null);
  };

  return (
    <section className="game-two">
      <div className="game-two-heading">
        <div>
          <p className="game-two-label">GAME 002</p>

          <h2>
            DEBUG
            <span> OR DIE.</span>
          </h2>

          <p className="game-two-description">
            One hidden bug stands between you and survival.
          </p>
        </div>

        <div className="game-two-symbol">△</div>
      </div>

      <div className="debug-layout">
        {/* LEFT PANEL */}

        <div className="debug-warning">
          <div className="warning-icon">!</div>

          <p className="warning-small">SYSTEM WARNING</p>

          <h3>MEMORY ERROR DETECTED</h3>

          <p>
            The program compiles, but one line may access an invalid position.
            Find it before Player 456 is eliminated.
          </p>

          <div className="threat-level">
            <span>THREAT LEVEL</span>
            <strong>CRITICAL</strong>
          </div>
        </div>

        {/* CODE PANEL */}

        <div className="debug-terminal">
          <div className="debug-terminal-top">
            <span>player456.cpp</span>
            <div className="terminal-status">● ERROR</div>
          </div>

          <div className="line-numbers">
            <span>01</span>
            <code>#include &lt;iostream&gt;</code>

            <span>02</span>
            <code>#include &lt;vector&gt;</code>

            <span>03</span>
            <code>using namespace std;</code>

            <span>04</span>
            <code></code>

            <span>05</span>
            <code>int main() &#123;</code>

            <span>06</span>
            <code>
              &nbsp;&nbsp;vector&lt;int&gt; scores = &#123;10, 20, 30, 40&#125;;
            </code>

            <span>07</span>
            <code>&nbsp;&nbsp;int total = 0;</code>

            <span>08</span>
            <code className="error-line">
              &nbsp;&nbsp;for (int i = 0; i &lt;= scores.size(); i++) &#123;
            </code>

            <span>09</span>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;total += scores[i];</code>

            <span>10</span>
            <code>&nbsp;&nbsp;&#125;</code>

            <span>11</span>
            <code>&nbsp;&nbsp;cout &lt;&lt; total;</code>

            <span>12</span>
            <code>&nbsp;&nbsp;return 0;</code>

            <span>13</span>
            <code>&#125;</code>
          </div>

          {result === null && (
            <>
              <p className="debug-question">What is wrong with line 08?</p>

              <div className="debug-options">
                <button onClick={() => checkAnswer("vector")}>
                  A<span>vectors cannot be used inside a for loop</span>
                </button>

                <button onClick={() => checkAnswer("loop-condition")}>
                  B<span>The condition should use i &lt; scores.size()</span>
                </button>

                <button onClick={() => checkAnswer("increment")}>
                  C<span>i++ should be replaced with i += 2</span>
                </button>
              </div>
            </>
          )}

          {result === "survived" && (
            <div className="debug-result debug-success">
              <div className="debug-result-symbol">✓</div>

              <div>
                <p>BUG TERMINATED</p>
                <h3>PLAYER SURVIVES</h3>
              </div>

              <button onClick={resetGame}>PLAY AGAIN</button>
            </div>
          )}

          {result === "eliminated" && (
            <div className="debug-result debug-fail">
              <div className="debug-result-symbol">✕</div>

              <div>
                <p>WRONG BUG SELECTED</p>
                <h3>PLAYER ELIMINATED</h3>
              </div>

              <button onClick={resetGame}>TRY AGAIN</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GameTwo;

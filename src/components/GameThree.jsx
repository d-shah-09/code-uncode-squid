import { useState } from "react";

const correctOrder = [
  "int factorial(int n) {",
  "int result = 1;",
  "for (int i = 2; i <= n; i++) {",
  "result *= i;",
  "} // end loop",
  "return result;",
  "} // end function",
  "int main() {",
  "cout << factorial(5);",
  "return 0;",
  "} // end main",
];

const blocks = [
  "cout << factorial(5);",
  "int result = 1;",
  "} // end function",
  "return 0;",
  "int factorial(int n) {",
  "result *= i;",
  "int main() {",
  "} // end loop",
  "return result;",
  "for (int i = 2; i <= n; i++) {",
  "} // end main",
];

function GameThree() {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [result, setResult] = useState(null);

  const selectBlock = (block) => {
    if (result) return;

    if (selectedBlocks.includes(block)) return;

    setSelectedBlocks([...selectedBlocks, block]);
  };

  const removeBlock = (index) => {
    if (result) return;

    const updated = selectedBlocks.filter((_, i) => i !== index);

    setSelectedBlocks(updated);
  };

  const checkCode = () => {
    if (selectedBlocks.length !== correctOrder.length) {
      return;
    }

    const isCorrect = selectedBlocks.every(
      (block, index) => block === correctOrder[index],
    );

    if (isCorrect) {
      setResult("survived");
    } else {
      setResult("eliminated");
    }
  };

  const resetGame = () => {
    setSelectedBlocks([]);
    setResult(null);
  };

  return (
    <section className="stack-game">
      <div className="stack-header">
        <div>
          <p className="stack-label">GAME 003</p>

          <h2>
            STACK
            <span> OR FALL.</span>
          </h2>

          <p className="stack-description">
            Build the program in the correct order. One wrong stack and your
            code collapses.
          </p>
        </div>

        <div className="stack-symbol">□</div>
      </div>

      <div className="stack-layout">
        {/* AVAILABLE BLOCKS */}

        <div className="stack-panel">
          <p className="stack-panel-label">CODE BLOCKS</p>

          <h3>SELECT YOUR NEXT MOVE</h3>

          <div className="available-blocks">
            {blocks.map((block, index) => {
              const used = selectedBlocks.includes(block);

              return (
                <button
                  key={index}
                  className={used ? "code-piece used" : "code-piece"}
                  onClick={() => selectBlock(block)}
                  disabled={used}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <code>{block}</code>
                </button>
              );
            })}
          </div>
        </div>

        {/* BUILD AREA */}

        <div className="build-panel">
          <div className="build-top">
            <div>
              <p>PLAYER 456</p>

              <h3>CODE STACK</h3>
            </div>

            <span>
              {selectedBlocks.length}/{correctOrder.length}
            </span>
          </div>

          <div className="stack-zone">
            {selectedBlocks.length === 0 && (
              <div className="empty-stack">
                <div>+</div>

                <p>SELECT CODE BLOCKS</p>

                <span>Build from top to bottom</span>
              </div>
            )}

            {selectedBlocks.map((block, index) => (
              <button
                key={index}
                className="stacked-block"
                onClick={() => removeBlock(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>

                <code>{block}</code>

                <strong>✕</strong>
              </button>
            ))}
          </div>

          {result === null && (
            <button
              className="execute-stack"
              onClick={checkCode}
              disabled={selectedBlocks.length !== correctOrder.length}
            >
              EXECUTE CODE →
            </button>
          )}

          {result === "survived" && (
            <div className="stack-result stack-success">
              <div>✓</div>

              <p>BUILD SUCCESSFUL</p>

              <h3>PLAYER SURVIVES</h3>

              <button onClick={resetGame}>BUILD AGAIN</button>
            </div>
          )}

          {result === "eliminated" && (
            <div className="stack-result stack-fail">
              <div>✕</div>

              <p>BUILD FAILED</p>

              <h3>PLAYER FALLS</h3>

              <button onClick={resetGame}>TRY AGAIN</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GameThree;

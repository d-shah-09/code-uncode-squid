import GameOne from "../components/GameOne";
import GameTwo from "../components/GameTwo";
import GameThree from "../components/GameThree";

function Games() {
  return (
    <main className="games-page">
      {/* Your Games page hero can stay here */}

      <section id="game-one">
        <GameOne />
      </section>

      <section id="game-two">
        <GameTwo />
      </section>

      <section id="game-three">
        <GameThree />
      </section>
    </main>
  );
}

export default Games;

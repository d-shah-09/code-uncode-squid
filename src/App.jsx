import { useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Timeline from "./pages/Timeline";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const navigate = useNavigate();

  const [started, setStarted] = useState(
    sessionStorage.getItem("gameStarted") === "true",
  );

  const [soundOn, setSoundOn] = useState(false);

  const audioRef = useRef(null);

  /* =========================
     ENTER WEBSITE
  ========================= */

  const startGame = () => {
    sessionStorage.setItem("gameStarted", "true");

    setStarted(true);

    navigate("/home");

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setSoundOn(true);
        })
        .catch(() => {
          setSoundOn(false);
        });
    }
  };

  /* =========================
     RETURN TO INTRO
  ========================= */

  const returnToIntro = () => {
    sessionStorage.removeItem("gameStarted");

    setStarted(false);

    navigate("/home");

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setSoundOn(false);
  };

  /* =========================
     SOUND
  ========================= */

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (soundOn) {
      audioRef.current.pause();

      setSoundOn(false);
    } else {
      audioRef.current.play();

      setSoundOn(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/intro.mp3" loop preload="auto" />

      {/* INTRO */}

      {!started ? (
        <Intro startGame={startGame} />
      ) : (
        <div className="website">
          <Navbar returnToIntro={returnToIntro} />

          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/games" element={<Games />} />

            <Route path="/timetable" element={<Timeline />} />

            <Route path="/rules" element={<Rules />} />

            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />

          <button type="button" className="global-sound" onClick={toggleSound}>
            {soundOn ? "SOUND ON" : "SOUND OFF"}
          </button>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <AppContent />
    </BrowserRouter>
  );
}

export default App;

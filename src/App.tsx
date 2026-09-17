import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Settings from "./pages/Settings";
import Game from "./pages/Game";
import ChooseGame from "./pages/ChooseGame";
import HowToPlay from "./pages/HowToPlay";

function App() {

  return (
    <main className="bg-[#111827]">
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/game" element={<Game />} />
          <Route path="/choose-game" element={<ChooseGame />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
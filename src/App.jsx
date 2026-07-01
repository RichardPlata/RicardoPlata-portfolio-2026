import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import GuQi from "./pages/GuQi";
import Kokoro from "./pages/Kokoro";
import BeyondTheShadows from "./pages/BeyondTheShadows";
import AuraDrive from "./pages/AuraDrive";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/aura-drive" element={<AuraDrive />} />
        <Route path="/projects/kokoro" element={<Kokoro />} />
        <Route path="/projects/gu-qi" element={<GuQi />} />
        <Route
          path="/projects/beyond-the-shadows"
          element={<BeyondTheShadows />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
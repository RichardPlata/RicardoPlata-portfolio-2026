import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import DigitalVault from "./pages/DigitalVault";
import Kokoro from "./pages/Kokoro";
import BeyondTheShadows from "./pages/BeyondTheShadows";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/digital-vault" element={<DigitalVault />} />
        <Route path="/projects/kokoro" element={<Kokoro />} />
        <Route path="/projects/beyond-the-shadows" element={<BeyondTheShadows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarchingBandInfo from "./components/MarchingBandInfo";
import BandGame from "./components/BandGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarchingBandInfo />} />
        <Route path="/game" element={<BandGame />} />
      </Routes>
    </Router>
  );
}

export default App;

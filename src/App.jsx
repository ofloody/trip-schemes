import { useState } from "react";
import mapLogo from "./assets/treasure-map.svg";
import "./App.css";
import PageGrid from "./components/pageGrid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KerryTrip from "./pages/KerryTrip";
import DerryTrip from "./pages/DerryTrip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-gray-50 flex items-center">
        <img src={mapLogo} className="logo map" alt="Map logo" />
      </div>
      <Routes>
        <Route path="/" element={<PageGrid />} />
        <Route path="/kerry" element={<KerryTrip />} />
        <Route path="/derry" element={<DerryTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

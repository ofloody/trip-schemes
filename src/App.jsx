import { useState } from "react";
import "./App.css";
import PageGrid from "./components/pageGrid";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import KerryTrip from "./pages/KerryTrip";
import DerryTrip from "./pages/DerryTrip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageGrid />} />
        <Route path="/kerry" element={<KerryTrip />} />
        <Route path="/derry" element={<DerryTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

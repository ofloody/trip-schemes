import { useState } from "react";
import mapLogo from "./assets/treasure-map.svg";
import "./App.css";
import PageGrid from "./components/pageGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <img src={mapLogo} className="logo map" alt="Map logo" />
      </div>
      <PageGrid />
    </div>
  );
}

export default App;

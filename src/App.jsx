import { useState } from "react";
import mapLogo from "./assets/treasure-map.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={mapLogo} className="logo map" alt="Map logo" />
      </div>
    </>
  );
}

export default App;

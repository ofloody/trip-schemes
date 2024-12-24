import { useState } from "react";
import KerryMap from "../components/kerryMap";

const KerryTrip = () => {
  const name = "Kerry Trip";

  return (
    <div className="p-8">
      <h1>{name}</h1>
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            alignContent: "center",
            margin: "auto",
            height: "500px",
            width: "800px",
          }}
        >
          <KerryMap />
        </div>
      </div>
      <div>
        <h2>Itinerary</h2>
        <div
          className="container"
          style={{
            display: "block",
            textAlign: "left",
          }}
        >
          <h3>Day 1: Travel to Kerry and Explore the Dingle Peninsula</h3>

          <b className="text-left">Claremorris → Ballybunion Beach</b>
          <div>Driving Time: ~3 hours</div>

          <b>Ballybunion Beach → Inch Beach</b>
          <div>Driving Time: ~1 hour 30 minutes</div>

          <b>Inch Beach → Slea Head Drive (Optional Loop)</b>
          <div>Driving Time: ~45 minutes to reach the start of the loop</div>
          <div>
            Note: The Slea Head Drive is a stunning coastal loop (~30 km/18.5
            miles) that takes about 1–2 hours to complete, depending on stops.
            It features breathtaking views, historical sites, and hidden coves.
          </div>
          <div>
            Optional Stop: If time is tight, you could skip this loop and head
            directly to Dingle Town.
          </div>

          <b>Slea Head Drive → Dingle Town (Overnight Stay)</b>
          <div>Driving Time: ~20 minutes</div>

          <h3>Day 2: Explore Beaches or Killarney and Return to Mayo</h3>

          <b>Dingle Town → Rossbeigh Beach</b>
          <div>Driving Time: ~1 hour 30 minutes</div>

          <b>Rossbeigh Beach → Killarney National Park (Optional Stop)</b>
          <div>Driving Time: ~50 minutes</div>
          <div>
            Optional Stop: If you prefer, skip Killarney National Park and
            explore more beaches along the way, such as Banna Strand or Fenit
            Beach.
          </div>

          <b>Killarney National Park → Claremorris (Destination)</b>
          <div>Driving Time: ~3 hours 15 minutes</div>

          <h3>Total Driving Times</h3>
          <div>Day 1 Driving Time: ~5 hours 35 minutes</div>
          <div>
            Day 2 Driving Time: ~5 hours 35 minutes (with optional stops
            factored in)
          </div>
          <div>Grand Total: ~11 hours 10 minutes</div>
        </div>
      </div>
    </div>
  );
};

export default KerryTrip;

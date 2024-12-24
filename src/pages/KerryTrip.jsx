import { useState } from "react";

const KerryTrip = () => {
  const name = "Kerry Trip";
  const map = "./kerry-map.png";

  const plan = `
  Day 1: Travel to Kerry and Explore the Dingle Peninsula
  Claremorris → Ballybunion Beach
  
  Driving Time: ~3 hours
  Ballybunion Beach → Inch Beach
  
  Driving Time: ~1 hour 30 minutes
  Inch Beach → Slea Head Drive (Optional Loop)
  
  Driving Time: ~45 minutes to reach the start of the loop
  Note: The Slea Head Drive is a stunning coastal loop (~30 km/18.5 miles) that takes about 1–2 hours to complete, depending on stops. It features breathtaking views, historical sites, and hidden coves.
  Optional Stop: If time is tight, you could skip this loop and head directly to Dingle Town.
  Slea Head Drive → Dingle Town (Overnight Stay)
  
  Driving Time: ~20 minutes
  Day 2: Explore Beaches or Killarney and Return to Mayo
  Dingle Town → Rossbeigh Beach
  
  Driving Time: ~1 hour 30 minutes
  Rossbeigh Beach → Killarney National Park (Optional Stop)
  
  Driving Time: ~50 minutes
  Optional Stop: If you prefer, skip Killarney National Park and explore more beaches along the way, such as Banna Strand or Fenit Beach.
  Killarney National Park → Claremorris (Return)
  
  Driving Time: ~3 hours 15 minutes
  Total Driving Times
  Day 1 Driving Time: ~5 hours 35 minutes
  Day 2 Driving Time: ~5 hours 35 minutes (with optional stops factored in)
  Grand Total: ~11 hours 10 minutes`;

  return (
    <div className="p-8">
      <h2>{name}</h2>
      <div>
        <h3>Map</h3>
        <img src={map} />
      </div>
      <div>
        <h3>Itinerary</h3>
        <div>{plan}</div>
      </div>
    </div>
  );
};

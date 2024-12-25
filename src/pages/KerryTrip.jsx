import { useState } from "react";
import KerryMap from "../maps/kerryMap";
import TripStop from "../components/TripStop";
import mapLogo from "../assets/treasure-map.svg";
import { useNavigate } from "react-router-dom";

const KerryTrip = () => {
  const navigate = useNavigate();
  const [stops, setStops] = useState([
    {
      id: 1,
      from: "Claremorris",
      to: "Ballybunion Beach",
      drivingTime: "~3 hours",
      description:
        "Start early and enjoy the tranquil drive through lush Irish countryside. Ballybunion Beach greets you with its golden sands and dramatic cliffs, perfect for a refreshing stroll. Explore the sea caves or capture panoramic photos of the rugged coastline.",
      notes: "",
    },
    {
      id: 2,
      from: "Ballybunion Beach",
      to: "Inch Beach",
      drivingTime: "~1 hour 30 minutes",
      description:
        "A haven for surfers and nature lovers, Inch Beach stretches majestically into the Atlantic. Dip your toes into the cool waters, or savor a cup of tea at a cozy café nearby. The vast expanse of this beach feels like an invitation to pause and breathe in the salty air.",
      notes: "",
    },
    {
      id: 3,
      from: "Inch Beach",
      to: "Slea Head Drive",
      drivingTime: "~45 minutes",
      description:
        "Optional but unmissable if time allows, Slea Head Drive is a jewel of the Wild Atlantic Way. This coastal route unveils jaw-dropping vistas, ancient forts, and perhaps even a glimpse of the Blasket Islands. Stop for photos at Coumeenoole Beach or marvel at the Dunbeg Fort, perched on a cliff edge.",
      notes:
        "The Slea Head Drive is a stunning coastal loop (~30 km/18.5 miles) that takes about 1–2 hours to complete, depending on stops. It features breathtaking views, historical sites, and hidden coves.",
    },
    {
      id: 4,
      from: "Slea Head Drive",
      to: "Dingle Town",
      drivingTime: "~20 minutes",
      description:
        "End the day in the charming Dingle Town, where brightly painted pubs hum with traditional Irish music. Treat yourself to fresh seafood and a pint of Guinness, then settle in for the night in one of the town’s cozy accommodations.",
      notes: "Overnight Stay",
    },
    {
      id: 5,
      from: "Dingle Town",
      to: "Rossbeigh Beach",
      drivingTime: "~1 hour 30 minutes",
      description:
        "Rossbeigh Beach, a secluded gem on the Iveragh Peninsula, is a paradise for walkers and birdwatchers. Enjoy a peaceful morning taking in the sea breeze and dramatic views of Dingle Bay.",
      notes: "",
    },
    {
      id: 6,
      from: "Rossbeigh Beach",
      to: "Killarney National Park",
      drivingTime: "~50 minutes",
      description:
        "Optional but highly recommended, Killarney National Park offers a breathtaking contrast of landscapes. Wander through Muckross House gardens, hike the trails around Torc Waterfall, or take a jaunting car ride through the Gap of Dunloe.",
      notes:
        "Optional Stop: If you prefer, skip Killarney National Park and explore more beaches along the way, such as Banna Strand or Fenit Beach.",
    },
    {
      id: 7,
      from: "Killarney National Park",
      to: "Claremorris",
      drivingTime: "~3 hours 15 minutes",
      description:
        "The journey home might be long, but it’s a wonderful time to reflect on the incredible sights and experiences of the past two days. Consider making a quick stop at a local café to break up the drive and savor one last taste of Kerry.",
      notes: "",
    },
  ]);

  const [editingId, setEditingId] = useState(null);

  const handleSave = (stopId, editedDetails) => {
    setStops(
      stops.map((stop) =>
        stop.id === stopId ? { ...stop, ...editedDetails } : stop
      )
    );
    setEditingId(null);
  };

  return (
    <div className="p-8 mx-auto bg-white">
      <div className="flex justify-center">
        <button
          key={"home-map"}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={mapLogo} className="logo map" alt="Map logo" />
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Kerry Trip</h1>

      <div className="mb-12">
        <div
          className="container"
          style={{
            display: "flex",
            alignContent: "center",
            margin: "auto",
            height: "60vh",
            width: "60vw",
          }}
        >
          <KerryMap />
        </div>
      </div>

      <div
        className="container p-8 m-4 bg-gray-50"
        style={{
          display: "block",
          textAlign: "left",
        }}
      >
        <h2 className="text-2xl text-gray-800 font-bold mb-6">Itinerary</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Day 1: Travel to Kerry and Explore the Dingle Peninsula
          </h3>
          {stops.slice(0, 4).map((stop) => (
            <TripStop
              key={stop.id}
              stop={stop}
              isEditing={editingId === stop.id}
              onEdit={() => setEditingId(stop.id)}
              onSave={(details) => handleSave(stop.id, details)}
              onCancel={() => setEditingId(null)}
            />
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Day 2: Explore Beaches or Killarney and Return to Mayo
          </h3>
          {stops.slice(4).map((stop) => (
            <TripStop
              key={stop.id}
              stop={stop}
              isEditing={editingId === stop.id}
              onEdit={() => setEditingId(stop.id)}
              onSave={(details) => handleSave(stop.id, details)}
              onCancel={() => setEditingId(null)}
            />
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg text-gray-700 border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Total Driving Times</h3>
          <div className="space-y-2">
            <div>Day 1 Driving Time: ~5 hours 35 minutes</div>
            <div>
              Day 2 Driving Time: ~5 hours 35 minutes (with optional stops
              factored in)
            </div>
            <div className="font-medium">Grand Total: ~11 hours 10 minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KerryTrip;

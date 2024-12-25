import { useState } from "react";
import DerryMap from "../maps/derryMap";
import TripStop from "../components/TripStop";
import { useNavigate } from "react-router-dom";
import mapLogo from "../assets/treasure-map.svg";

const DerryTrip = () => {
  const navigate = useNavigate();
  const [stops, setStops] = useState([
    {
      id: 1,
      from: "Claremorris",
      to: "Mullaghmore Beach",
      drivingTime: "~1 hour 30 minutes",
      description:
        "Located in County Sligo, Mullaghmore Beach offers stunning coastal views with its golden sands and the dramatic backdrop of Ben Bulben.",
      notes: "",
    },
    {
      id: 2,
      from: "Mullaghmore Beach",
      to: "Rossnowlagh Beach",
      drivingTime: "~1 hour",
      description: "",
      notes:
        "A favorite for surfers, this long beach in County Donegal is perfect for a relaxing stroll or grabbing a snack at the nearby Smuggler’s Creek Inn.",
    },
    {
      id: 3,
      from: "Rossnowlagh Beach",
      to: "Derry",
      drivingTime: "~1 hour 30 minutes",
      description: "",
      notes:
        "Arrive in Derry around mid-afternoon. Check into your accommodation and start exploring the city.",
    },
    {
      id: 4,
      from: "Derry",
      to: "Derry",
      drivingTime: "~0 minutes",
      description:
        "End the day in the charming Dingle Town, where brightly painted pubs hum with traditional Irish music. Treat yourself to fresh seafood and a pint of Guinness, then settle in for the night in one of the town’s cozy accommodations.",
      notes: "Overnight Stay",
    },
    {
      id: 5,
      from: "Derry Town",
      to: "Mussenden Temple & Downhill Demesne",
      drivingTime: "~30 minutes",
      description:
        "Explore the stunning clifftop temple and its picturesque surroundings.",
      notes: "",
    },
    {
      id: 6,
      from: "Mussenden Temple & Downhill Demesne",
      to: "Giant’s Causeway (Optional)",
      drivingTime: "~1 hour",
      description:
        "Optional but highly recommended, Marvel at this UNESCO World Heritage Site and its unique basalt columns.",
      notes: "",
    },
    {
      id: 7,
      from: "Giant’s Causeway",
      to: "Tullan Strand",
      drivingTime: "~1 hour 30 minutes",
      description:
        "Near Bundoran, Tullan Strand is a windswept beach with dramatic cliffs, ideal for a final coastal walk.",
      notes: "",
    },
    {
      id: 8,
      from: "Tullan Strand",
      to: "Claremorris",
      drivingTime: "~2 hours 30 minutes",
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
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Derry Trip</h1>

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
          <DerryMap />
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
            Day 1: Travel to Derry and Explore the City
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
            Day 2: Scenic Exploration and Return to Mayo
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
            <div>Day 1 Driving Time: ~4 hours</div>
            <div>
              Day 2 Driving Time: ~5.5 hours (with Giant’s Causeway and beaches)
            </div>
            <div className="font-medium">Grand Total: ~9 hours 30 minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DerryTrip;

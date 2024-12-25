import { useState } from "react";
import KerryMap from "../components/kerryMap";
import {
  CarFront,
  ChevronDown,
  ChevronUp,
  Edit2,
  Info,
  NotebookPen,
  Save,
  X,
} from "lucide-react";

const TripStop = ({ stop, onEdit, isEditing, onSave, onCancel }) => {
  const [editedDetails, setEditedDetails] = useState({
    title: stop.title,
    drivingTime: stop.drivingTime,
    description: stop.description,
    notes: stop.notes,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="container flex items-left cursor-pointer"
        onClick={() => !isEditing && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center text-gray-700 gap-2">
          <b>
            {stop.from} → {stop.to}
          </b>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          {!isEditing ? (
            <Edit2
              size={18}
              className="hover:text-blue-500"
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
            />
          ) : null}
        </div>
      </div>

      {
        <div className="mt-4 pl-6">
          {isEditing ? (
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">
                <div className="flex items-center space-x-2">
                  <CarFront size={16} className="text-blue-500 mr-2" />
                  <label
                    htmlFor="drive time"
                    className="text-gray-700 font-medium"
                  >
                    Drive Time
                  </label>
                </div>
                <textarea
                  type="drive time"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                  value={editedDetails.drivingTime}
                  onChange={(e) =>
                    setEditedDetails({
                      ...editedDetails,
                      drivingTime: e.target.value,
                    })
                  }
                  rows={1}
                />
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">
                <div className="flex items-center space-x-2">
                  <Info size={16} className="text-green-500 mt-1" />
                  <label htmlFor="notes" className="text-gray-700 font-medium">
                    Notes
                  </label>
                </div>
                <textarea
                  id="notes"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                  value={editedDetails.notes}
                  onChange={(e) =>
                    setEditedDetails({
                      ...editedDetails,
                      notes: e.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Write your notes here..."
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">
                <div className="flex items-center space-x-2">
                  <NotebookPen size={16} className="text-purple-500 mt-1" />
                  <label
                    htmlFor="description"
                    className="text-gray-700 font-medium"
                  >
                    Description
                  </label>
                </div>
                <textarea
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                  value={editedDetails.description}
                  onChange={(e) =>
                    setEditedDetails({
                      ...editedDetails,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
              <div className="flex gap-2 p-4 m-4">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => onSave(editedDetails)}
                >
                  <Save size={16} />
                </button>
                <button
                  className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={onCancel}
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center p-4  border-gray-200">
                <CarFront size={16} className="text-blue-500 mr-2" />
                <span className="text-gray-800 font-medium">
                  Driving Time: {stop.drivingTime}
                </span>
              </div>

              {stop.notes && (
                <div className="text-gray-700 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 flex items-start gap-2">
                  <Info size={16} className="text-green-500 mt-1" />
                  <span>{stop.notes}</span>
                </div>
              )}

              {isExpanded && stop.description && (
                <div className="text-gray-700 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 flex items-start gap-2">
                  <NotebookPen size={20} className="text-purple-500 mt-1" />
                  <span>{stop.description}</span>
                </div>
              )}
            </div>
          )}
        </div>
      }
    </div>
  );
};

const KerryTrip = () => {
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
    <div className="p-8 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Kerry Trip</h1>

      <div className="mb-12">
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

      <div
        className="container"
        style={{
          display: "block",
          textAlign: "left",
        }}
      >
        <h2 className="text-2xl font-bold mb-6">Itinerary</h2>

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

        <div className="bg-gray-50 p-6 rounded-lg text-gray-700 border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
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

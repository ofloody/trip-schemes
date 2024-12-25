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
import { useState } from "react";

const TripStop = ({ stop, onEdit, isEditing, onSave, onCancel }) => {
  const [editedDetails, setEditedDetails] = useState({
    title: stop.title,
    drivingTime: stop.drivingTime,
    description: stop.description,
    notes: stop.notes,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
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
              <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
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
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
                  <label
                    htmlFor="description"
                    className="text-gray-700 font-medium"
                  >
                    Description
                  </label>
                </div>
                <textarea
                  id="description"
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
              <div className="p-6 bg-gray-50 rounded-lg shadow-md space-y-4">
                <div className="flex items-center space-x-2">
                  <NotebookPen size={16} className="text-purple-500 mt-1" />
                  <label htmlFor="notes" className="text-gray-700 font-medium">
                    Notes
                  </label>
                </div>
                <textarea
                  id="notes"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                  value={editedDetails.description}
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
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center p-4  border-gray-200">
                <CarFront size={16} className="text-blue-500 mr-2" />
                <span className="text-gray-800 font-medium">
                  Driving Time: {stop.drivingTime}
                </span>
              </div>

              {stop.description && (
                <div className="text-gray-700 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 flex items-start gap-2">
                  <Info size={16} className="text-green-500 mt-2 shrink-0" />
                  <span>{stop.description}</span>
                </div>
              )}

              {isExpanded && stop.notes && (
                <div className="text-gray-700 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 flex items-start gap-2">
                  <NotebookPen
                    size={20}
                    className="text-purple-500 mt-2 shrink-0"
                  />
                  <span>{stop.notes}</span>
                </div>
              )}
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default TripStop;

import React, { useState } from "react";
import { X } from "lucide-react";
import KerryTrip from "../pages/KerryTrip";

const PageGrid = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = [
    {
      id: 1,
      name: "Kerry",
      type: "component",
      preview: () => <KerryTrip />,
    },
    {
      id: 2,
      name: "Image Preview",
      type: "image",
      preview: () => (
        <img
          src="/api/placeholder/400/300"
          alt="placeholder"
          className="w-full h-full object-cover rounded"
        />
      ),
    },
    {
      id: 3,
      name: "Alert",
      type: "component",
      preview: () => (
        <div className="w-full h-full flex items-center justify-center bg-yellow-100 border-yellow-400 border rounded">
          Alert Message
        </div>
      ),
    },
  ];

  const Modal = ({ component, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{component.name}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 border rounded min-h-[300px] flex items-center justify-center">
          {component.preview()}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {components.map((component) => (
          <button
            key={component.id}
            onClick={() => setSelectedComponent(component)}
            className="group relative bg-white border rounded-lg hover:shadow-lg transition-shadow overflow-hidden h-64"
          >
            <div className="absolute inset-0 p-4">{component.preview()}</div>
            <div className="absolute bottom-0 inset-x-0 bg-white bg-opacity-90 p-2 border-t">
              <span className="text-md font-medium">{component.name}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedComponent && (
        <Modal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  );
};

export default ComponentGrid;

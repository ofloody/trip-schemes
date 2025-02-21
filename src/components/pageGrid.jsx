import React, { useState } from "react";
import { Asterisk, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mapLogo from "../assets/treasure-map.svg";
import KerryMap from "../maps/kerryMap";
import DerryMap from "../maps/derryMap";

const PageGrid = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const navigate = useNavigate();
  const onSelect = (id) => {
    if (id == 1) {
      navigate("/kerry");
    } else {
      navigate("/derry");
    }
  };
  const components = [
    {
      id: 1,
      name: "Kerry",
      type: "component",
      preview: () => (
        <div
          className="container"
          style={{
            display: "flex",
            margin: "auto",
            height: "200px",
            width: "250px",
          }}
        >
          <KerryMap />
        </div>
      ),
    },
    {
      id: 2,
      name: "Derry",
      type: "component",
      preview: () => (
        <div
          className="container"
          style={{
            display: "flex",
            margin: "auto",
            height: "200px",
            width: "250px",
          }}
        >
          <DerryMap />
        </div>
      ),
    },
  ];

  return (
    <div className="container grid">
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
      <div className="m-4 bg-gray-50 flex flex-row flex-wrap place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {components.map((component) => (
          <div className="card card-compact col-span-1 w-32 md:w-72 lg:w-96">
            <button
              key={component.id}
              onClick={() => onSelect(component.id)}
              className="bg-white border flex-row"
            >
              {component.preview()}
              <div className="bg-white bg-opacity-90 p-2">
                <span className="text-left text-md text-gray-800 font-medium">
                  {component.name}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="m-2 px-4 py-3 border flex-row rounded-md flex items-start gap-4">
        <Star size={20} className="text-yellow-500 mt-1" />
        <span className="text-gray-800">
          Coming Soon: Write Back Capabilites with Persistant Storage
        </span>
      </div>
      <div className="m-2 px-4 py-3 border flex-row rounded-md flex items-start gap-4">
        <Asterisk size={20} className="text-purple-500 mt-1" />
        <span className="text-gray-800">
          All Content Generated by ChatGPT Travel Guide
        </span>
      </div>
    </div>
  );
};

export default PageGrid;

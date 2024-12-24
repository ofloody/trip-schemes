import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const KerryMap = () => {
  useEffect(() => {
    // Fix Leaflet's icon path issues
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    // Initialize map
    const map = L.map("map", {
      center: [52.14, -9.78],
      zoom: 8,
      zoomControl: true,
      preferCanvas: false,
    });

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Data by &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',
      maxZoom: 18,
    }).addTo(map);

    // Location data
    const locations = [
      { pos: [53.7215, -9.0044], name: "Claremorris (Start)" },
      { pos: [52.1544, -9.9598], name: "Inch Beach" },
      { pos: [52.1199, -10.4449], name: "Slea Head Drive" },
      { pos: [52.1401, -10.2681], name: "Dingle Town (Overnight Stay)" },
    ];
    const locations_day2 = [
      { pos: [52.1401, -10.2681], name: "Dingle Town (Overnight Stay)" },
      { pos: [52.0603, -9.9338], name: "Rossbeigh Beach" },
      { pos: [52.0583, -9.5245], name: "Killarney National Park" },
      { pos: [52.5108, -9.6734], name: "Ballybunion Beach" },
      { pos: [53.7215, -9.0044], name: "Claremorris (End)" },
    ];

    // Create markers with popups and tooltips
    locations.concat(...locations_day2).forEach((loc) => {
      const marker = L.marker(loc.pos).addTo(map);

      // Add popup
      marker.bindPopup(`<div>${loc.name}</div>`);

      // Add tooltip
      marker.bindTooltip(`<div>${loc.name}</div>`, {
        sticky: true,
      });
    });
    locations_day2;

    // Create route polyline
    const routeCoords = locations.map((loc) => loc.pos);
    L.polyline(routeCoords, {
      color: "blue",
      weight: 2.5,
      opacity: 0.8,
    }).addTo(map);

    const routeCoords2 = locations_day2.map((loc) => loc.pos);
    L.polyline(routeCoords2, {
      color: "purple",
      weight: 2.5,
      opacity: 0.8,
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this runs once on mount

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default KerryMap;

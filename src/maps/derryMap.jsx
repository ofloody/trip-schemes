import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

const DerryMap = () => {
  useEffect(() => {
    // Icon setup for color differentiation
    const blueIcon = new L.Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: "blue-icon",
    });

    const greenIcon = new L.Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-green.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: "green-icon",
    });

    const lightGreenIcon = new L.Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-green.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: "light-green-icon",
    });

    // Coordinates for map markers and lines
    const stopsDay1 = [
      {
        coords: [53.7215, -9.0044],
        label: "Claremorris (Start)",
        icon: blueIcon,
      },
      {
        coords: [54.4514, -8.4534],
        label: "Mullaghmore Beach",
        icon: blueIcon,
      },
      {
        coords: [54.5575, -8.2033],
        label: "Rossnowlagh Beach",
        icon: blueIcon,
      },
      {
        coords: [54.9981, -7.3092],
        label: "Derry (Overnight Stay)",
        icon: blueIcon,
      },
    ];

    const stopsDay2 = [
      {
        coords: [55.1552, -6.8221],
        label: "Mussenden Temple & Downhill Demesne",
        icon: greenIcon,
      },
      {
        coords: [55.2408, -6.5116],
        label: "Giant's Causeway (Optional)",
        icon: lightGreenIcon,
      },
      { coords: [54.4817, -8.2829], label: "Tullan Strand", icon: greenIcon },
      {
        coords: [53.7215, -9.0044],
        label: "Claremorris (Return)",
        icon: greenIcon,
      },
    ];

    // Polylines for the routes
    const day1Route = [
      [53.7215, -9.0044],
      [54.4514, -8.4534],
      [54.5575, -8.2033],
      [54.9981, -7.3092],
    ];

    const day2Route = [
      [54.9981, -7.3092],
      [55.1552, -6.8221],
      [55.2408, -6.5116],
      [54.4817, -8.2829],
      [53.7215, -9.0044],
    ];

    // Initialize map
    const map = L.map("map2", {
      center: [54.95, -7.7333],
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
    // Create markers with popups and tooltips
    stopsDay1.concat(...stopsDay2).forEach((loc) => {
      const marker = L.marker(loc.coords).addTo(map);

      // Add popup
      marker.bindPopup(`<div>${loc.label}</div>`);

      // Add tooltip
      marker.bindTooltip(`<div>${loc.label}</div>`, {
        sticky: true,
      });
    });

    // Create route polyline
    //const routeCoords = day1Route.map((loc) => loc.coords);
    L.polyline(day1Route, {
      color: "blue",
      weight: 2.5,
      opacity: 0.8,
    }).addTo(map);

    //const routeCoords2 = day2Route.map((loc) => loc.pos);
    L.polyline(day2Route, {
      color: "purple",
      weight: 2.5,
      opacity: 0.8,
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this runs once on mount

  return <div id="map2" style={{ width: "100%", height: "100%" }} />;
};

// const DerryMap = () => {
//   return (
//     <div>
//       <MapContainer
//         center={[54.95, -7.7333]}
//         zoom={8}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {/* Day 1 Markers */}
//         {stopsDay1.map((stop, index) => (
//           <Marker key={index} position={stop.coords} icon={stop.icon}>
//             <Popup>{stop.label}</Popup>
//           </Marker>
//         ))}
//         {/* Day 2 Markers */}
//         {stopsDay2.map((stop, index) => (
//           <Marker key={index} position={stop.coords} icon={stop.icon}>
//             <Popup>{stop.label}</Popup>
//           </Marker>
//         ))}
//         {/* Routes */}
//         <Polyline positions={day1Route} color="blue" />
//         <Polyline positions={day2Route} color="green" />
//       </MapContainer>
//     </div>
//   );
// };

export default DerryMap;

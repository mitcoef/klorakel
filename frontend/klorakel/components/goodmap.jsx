import { useState, useEffect } from 'react';
//import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}
// function LocationMarker() {
//   const [position, setPosition] = useState(null)
//   const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   )
// }
export default function GoodMap() {
  const [geoData, setGeoData] = useState({lat: 48.13714, lng: 11.57611});

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={12} style={{ width: "100%", height: "100%", cornerradius: "15px" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} /> */}
    </MapContainer>
  );

}

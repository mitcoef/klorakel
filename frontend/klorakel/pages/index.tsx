import styles from "../styles/Home.module.css";
//import "leaflet-heatmap.js";
import Map from "../components/Map";
import { mockToilets } from "../types";
import styled from "styled-components";
import { title } from "process";
import { Tooltip } from "react-leaflet";

const MapContainer = styled.div`

  display: flex;
  height: 20rem;
  align: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 20px;
  align-content: center;
  width: 80%;
`;
const DEFAULT_CENTER = [48.13714, 11.57611];
const OTHER = [50.13714, 12.57611];

export default function Heatmap() {
  return (
    <MapContainer>
      <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
        {({
          TileLayer,
          Marker,
          Popup,
        }: {
          TileLayer: any;
          Marker: any;
          Popup: any;
        }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {mockToilets.map((toilet) => (<Marker position={[toilet.lat, toilet.long]}>
              <Popup>
                {toilet.name} <br /> Ein tolles Klo.
              </Popup>
              <Tooltip position={[toilet.lat, toilet.long]}> Tolles Tooltip</Tooltip>
            </Marker>))}
          </>
        )}
      </Map>
    </MapContainer>
  );
}

function populateHeatmap() {
  var map = (
    <MapContainer>
      <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
        {({
          TileLayer,
          Marker,
          Popup,
        }: {
          TileLayer: any;
          Marker: any;
          Popup: any;
        }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </>
        )}
      </Map>
    </MapContainer>
  );
  map.getSize();
  /*
  for (var toilet in mockToilets) {
    <Marker position={DEFAULT_CENTER}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  }*/
}

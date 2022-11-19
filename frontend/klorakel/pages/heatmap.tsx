import styles from "../styles/Home.module.css";
//import "leaflet-heatmap.js";
import Map from "../components/Map";
import { mockToilets } from "../types";
import styled from "styled-components";

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
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </MapContainer>
  );
}

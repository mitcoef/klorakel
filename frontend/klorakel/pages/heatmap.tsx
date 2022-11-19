import styles from "../styles/Home.module.css";
//import "leaflet-heatmap.js";
import Map from "../components/Map";
import { mockToilets } from "../types";
import styled from "styled-components";
import React, { useState } from "react";
import {
  StyledButton,
  MapContainer,
  PageContainer,
} from "../components/components";

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;

const DEFAULT_CENTER = [48.13714, 11.57611];
export default function Heatmap() {
  const [markers, setMarkers] = useState([]);

  function addMarker(e:any) {
    markers.push(e.latlng);
    setMarkers(markers.push(e.latlng));
  }

  return (
    <PageContainer>
      <MapContainer>
        <Map
          className={styles.homeMap}
          center={DEFAULT_CENTER}
          onClick={addMarker}
          zoom={12}
        >
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
      <ButtonContainer>
        <StyledButton>Suggest a new toilet location!</StyledButton>
      </ButtonContainer>
    </PageContainer>
  );
}

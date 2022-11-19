import styles from "../styles/Home.module.css";
//import "leaflet-heatmap.js";
import Map from "../components/Map";
import { mockToilets } from "../types";
import styled from "styled-components";
import React, { useState } from "react";
import ReactLeaflet, { useMapEvents } from "react-leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StyledButton, MapCont, PageContainer } from "../components/components";
import { useEffect } from "react";
import L from "leaflet";
import dynamic from 'next/dynamic';


const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;


const MapWithNoSSR = dynamic(() => import('../components/GoodMap'), {
  ssr: false,
});

const DEFAULT_CENTER = [48.13714, 11.57611];

function HeatMapComponent() {
  const [markers, setMarkers] = useState([]);
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound: (location: any) => {
      console.log('location found:', location.latlng)
    },
  });
  return null;
}

export default function HeatMapPage() {
  return (
    <PageContainer>
      <MapCont>
        <MapWithNoSSR></MapWithNoSSR>
      </MapCont>
      <ButtonContainer>
        <StyledButton>Suggest a new toilet location!</StyledButton>
      </ButtonContainer>
    </PageContainer>
  );
}

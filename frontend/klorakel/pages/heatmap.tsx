import styles from "../styles/Home.module.css";
//import "leaflet-heatmap.js";
import Map from "../components/Map/index";
import { mockToilets } from "../types";
import styled from "styled-components";
import React, { useState } from "react";
import ReactLeaflet, { Tooltip, useMapEvents } from "react-leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { StyledButton, MapCont, PageContainer } from "../components/components";
import { useEffect } from "react";
import L from "leaflet";
import dynamic from "next/dynamic";

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;

// const MapWithNoSSR = dynamic(() => import('../components/GoodMap'), {
//   ssr: false,
// });

const DEFAULT_CENTER = [48.2626782, 11.6679158];

// function HeatMapComponent() {
//   const [markers, setMarkers] = useState();
//   const map = useMapEvents({
//     click: () => {
//       map.locate();
//     },
//     locationfound: (location: any) => {
//       console.log('location found:', location.latlng)
//     },
//   });
//   return null;
// }

export default function HeatMapPage() {
  const [markers, setMarkers] = useState<GeolocationCoordinates[]>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setMarkers([position.coords]);
    });
  }, []);
  const sendLocation = () => {
    fetch("http://127.0.0.1:8000/newRequest", {
      body: JSON.stringify({
        name: Date(),
        lat: markers![0].latitude,
        long: markers![0].longitude,
        req: true,
      }),

      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <PageContainer>
      <MapCont>
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
              {(markers ?? [{ latitude: 10.11111, longitude: 80.0 }]).map(
                (marker: any) => (
                  <Marker position={[marker.latitude, marker.longitude]}>
                    <Tooltip>{"Your position!"}</Tooltip>
                  </Marker>
                )
              )}
            </>
          )}
        </Map>
      </MapCont>
      <ButtonContainer>
        <StyledButton onClick={sendLocation}>
          Suggest your location for a toilet!
        </StyledButton>
      </ButtonContainer>
    </PageContainer>
  );
}

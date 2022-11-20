import styles from "../styles/Home.module.css";
import HeatmapLayer from "react-leaflet-heatmap-layer";

//import "leaflet-heatmap.js";
import Map from "../components/Map/index";
import styled from "styled-components";
import React, { useState } from "react";
import L from 'leaflet'

import { Tooltip } from "react-leaflet";
import { StyledButton, MapCont, PageContainer } from "../components/components";
import { useEffect } from "react";
// const heatmaplayer = require('react-leaflet-heatmap-layer');
// const {HeatmapLayer} = heatmaplayer;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`;

// const MapWithNoSSR = dynamic(() => import('../components/GoodMap'), {
//   ssr: false,
// });

const DEFAULT_CENTER = [48.2626782, 11.6679158];

const SSR = typeof window === 'undefined';
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const [toilets, setToilets] = useState(Array());

  const fetchToilets = () => {
    fetch("http://127.0.0.1:8000/requestedKlos")
      .then((response) => response.json())
      .then((data) => setToilets(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchToilets();
  }, []);

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
              {/* <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={toilets}
                longitudeExtractor={(m: any) => m.lat}
                latitudeExtractor={(m: any) => m.long}
                intensityExtractor={(m: any) => 1}
                radius={10}
              /> */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {(markers ?? [{ latitude: 10.11111, longitude: 80.0 }]).map(
                (marker: any) => (
                  <Marker
                    position={[marker.latitude, marker.longitude]}
                    key={marker.title}
                  >
                    <Tooltip>{"Your position!"}</Tooltip>
                  </Marker>
                )
              )}
              {toilets.map(
                (toilet: any) => (
                  <Marker
                    position={[toilet.lat, toilet.long]}
                    icon={greenIcon}
                    key={toilet.name}
                  >
                    <Tooltip>{toilet.name}</Tooltip>
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

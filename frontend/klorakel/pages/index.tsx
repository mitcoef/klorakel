import styles from "../styles/Home.module.css";
//import "leaflet-heatmap.js";
import Map from "../components/Map/index";
import { MapCont, PageContainer } from "../components/components";
import { useEffect, useState } from "react";


// const MapContainer = styled.div`
//   display: flex;
//   height: 20rem;
//   align: center;
//   flex-direction: row;
//   justify-content: space-evenly;
//   margin: auto;
//   margin-top: 20px;
//   align-content: center;
//   width: 80%;
// `;
const DEFAULT_CENTER = [48.13714, 11.57611];

export default function KloMap() {
  const [toilets, setToilets] = useState([])

  const fetchToilets = () => {
    fetch("http://127.0.0.1:8000/existingKlos")
      .then((response) => response.json())
      .then((data) => setToilets(data) /*setToilets(data)*/);
    }

    useEffect(() => {
      fetchToilets()
    }, []);
  // const address = `127.0.0.1:8000/existingKlos`;
  // const fetcher = async (url: any) =>
  //   await axios.get(url).then((res) => res.data);
  // const { data, error } = useSWR(address, fetcher);

  // if (error) <p>Loading failed...</p>;
  // if (!data) <h1>Loading...</h1>;
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
              {toilets.map((toilet:any) => (
                <Marker position={[toilet.lat, toilet.long]}>
                  <Popup>{toilet.name}</Popup>
                </Marker>
              ))}
            </>
          )}
        </Map>
      </MapCont>
    </PageContainer>
  );
}

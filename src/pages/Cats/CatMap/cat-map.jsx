import DisplayFilters from "./display-filters";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import UserLocationMap from "../../../components/UserLocationMap/user-location-map";
import io from "socket.io-client";
import axios from "axios";
import HeartAngel from "../../../assets/heartangel.jpg";
import GreenStar from "../../../assets/greenstar.png";
import WarningSign from "../../../assets/warningsign.png";

const socket = io("http://localhost:3001");

const CatMapContainer = styled.div`
  height: 80vh;
  width: 100vw;
`;
// Color mapping for different cat statuses
const statusColorMapping = {
  "Verkar frisk": "yellow",
  "Utekatt med registrerad ägare": "green",
  "Ägare har inget konto, men andra har rapporterat att katten har ägare och ej försvunnen":
    "yellow",
  "Katten ser ej omhändertagen ut. T.ex. okastrerad, ovälvårdad, överdrivet kontaktsökande, hungrig eller annat som kan tyda på att katten är vilsen":
    "red",
  "Katten behöver tas in omgående(skadad, kattunge etc)": "red",
  "Avliden": "black",
};

const getSymbolForStatus = (status) => {
  console.log(`Getting symbol for status: ${status}`);
  switch (status) {
    case "Ägare har inget konto, men andra har rapporterat att katten har ägare och ej försvunnen":
      return GreenStar;
    case "Katten behöver tas in omgående(skadad, kattunge etc)":
      return WarningSign;
    case "Avliden":
      return HeartAngel;
    default:
      return null;
  }
};

function CatMap() {
  const [viewState, setViewState] = useState({
    longitude: 18.0686,
    latitude: 59.3293,
    zoom: 10,
  });

  // State for existing and new cats
  const [observedCats, setObservedCats] = useState([]);
  const [newCatCoordinates, setNewCatCoordinates] = useState({
    newCatLatitude: 0,
    newCatLongitude: 0,
  });

  // Fetch existing cats on component mount
  useEffect(() => {
    const fetchExistingCats = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cats");
        // Transform the data to match the format needed for markers
        const transformedCats = response.data.map((cat) => ({
          id: cat._id,
          latitude: cat.eventInfo.latitude,
          longitude: cat.eventInfo.longitude,
          status: cat.catStatus.overallStatus,
          date: cat.eventInfo.date,
          color: statusColorMapping[cat.catStatus.overallStatus] || "gray",
        }));
        setObservedCats(transformedCats);
      } catch (error) {
        console.error("Error fetching existing cats:", error);
      }
    };

    fetchExistingCats();
  }, []);

  // Handle real-time updates
  useEffect(() => {
    socket.on("cat-updated", (update) => {
      console.log("Real-time update received:", update);

      const { latitude, longitude } = update.fullDocument.eventInfo || {};

      if (latitude && longitude) {
        // Update new cat coordinates
        setNewCatCoordinates({
          newCatLatitude: latitude,
          newCatLongitude: longitude,
        });

        // Add the new cat to observed cats
        setObservedCats((prevCats) => {
          const newCat = {
            id: update.fullDocument._id,
            latitude: latitude,
            longitude: longitude,
            status: update.fullDocument.status,
            date: update.fullDocument.eventInfo.date,
          };

          // Check if cat already exists, if so update it, if not add it
          const existingCatIndex = prevCats.findIndex(
            (cat) => cat.id === newCat.id
          );
          if (existingCatIndex >= 0) {
            const updatedCats = [...prevCats];
            updatedCats[existingCatIndex] = newCat;
            return updatedCats;
          } else {
            return [...prevCats, newCat];
          }
        });
      }
    });

    // Clean up
    return () => {
      socket.off("cat-updated");
    };
  }, []);

  const handleLocationSelect = (location) => {
    console.log("Selected location:", location);
    // Handle location selection if needed
  };

  return (
    <CatMapContainer>
      <DisplayFilters />
      <UserLocationMap
        viewState={viewState}
        setViewState={setViewState}
        onLocationSelect={handleLocationSelect}
        newCatCoordinates={newCatCoordinates}
        showObservedCats={true}
        observedCats={observedCats}
        getSymbolForStatus={getSymbolForStatus}
      />
    </CatMapContainer>
  );
}

export default CatMap;

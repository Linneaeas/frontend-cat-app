import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Navbar from "./components/navbar.jsx";
import { globalStyles } from "./styles.js";
import Fab from "./components/fab.jsx";
import CatMap from "./pages/Cats/CatMap/cat-map.jsx";
import CatProfiles from "./pages/Cats/cat-profiles.jsx";
import SuccessStories from "./pages/Cats/success-stories.jsx";
import Missions from "./pages/Missions/missions.jsx";
import FosterHome from "./pages/FosterHome/foster-home.jsx";
import AddSeenCatModal from "./components/AddCatModal/add-cat-modal.jsx";
import HomePage from "./pages/home.jsx";
import LoginModal from "./components/login-modal.jsx";
import CreateAccount from "./pages/Account/create-account.jsx";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

function App() {
  const [isAddCatModalOpen, setAddCatModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleFabClick = () => {
    setAddCatModalOpen(true);
  };
  const handleCloseAddCatModal = () => {
    setAddCatModalOpen(false);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div>
      <Global styles={globalStyles} />
      <Router>
        <Navbar onLoginClick={handleLoginClick} />
        <Routes>
          {/* MAIN ROUTES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/foster-home" element={<FosterHome />} />
          <Route path="/create-account" element={<CreateAccount />}></Route>
          {/* CATEGORY ROUTES */}
          <Route path="/cat-map" element={<CatMap />} />
          <Route path="/cat-profiles" element={<CatProfiles />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </Router>
      <Fab onClick={handleFabClick} />
      {isAddCatModalOpen && (
        <AddSeenCatModal onClose={handleCloseAddCatModal} />
      )}
      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
    </div>
  );
}

export default App;

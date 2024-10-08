import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Navbar from "./components/navbar.jsx";
import { globalStyles } from "./styles.js";
import Fab from "./components/fab.jsx";
import Cats from "./pages/cats.jsx";
import Missions from "./pages/missions.jsx";
import FosterHome from "./pages/foster-home.jsx";
import AddCatModal from "./components/AddCatModal/add-cat-modal.jsx";
import LoginModal from "./components/login-modal.jsx";
import CreateAccount from "./pages/create-account.jsx";

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
          <Route path="/" element={<Cats />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/foster-home" element={<FosterHome />} />
          <Route path="/create-account" element={<CreateAccount />}></Route>
        </Routes>
      </Router>
      <Fab onClick={handleFabClick} />
      {isAddCatModalOpen && <AddCatModal onClose={handleCloseAddCatModal} />}
      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
    </div>
  );
}

export default App;

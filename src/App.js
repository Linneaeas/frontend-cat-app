import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Navbar from "./components/navbar.jsx";
import { globalStyles } from "./styles.js";
import Fab from "./components/fab.jsx";
import Katter from "./pages/katter.jsx";
import Uppdrag from "./pages/uppdrag.jsx";
import Jourhem from "./pages/jourhem.jsx";
import AddCatModal from "./components/add-cat-modal.jsx";
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
          <Route path="/" element={<Katter />} />
          <Route path="/katter" element={<Katter />} />
          <Route path="/uppdrag" element={<Uppdrag />} />
          <Route path="/jourhem" element={<Jourhem />} />
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

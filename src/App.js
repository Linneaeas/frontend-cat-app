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

function App() {
  const [isAddCatModalOpen, setAddCatModalOpen] = useState(false);
  const handleFabClick = () => {
    setAddCatModalOpen(true);
  };
  const handleCloseAddCatModal = () => {
    setAddCatModalOpen(false);
  };
  return (
    <div>
      <Global styles={globalStyles} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Katter />} />
          <Route path="/katter" element={<Katter />} />
          <Route path="/uppdrag" element={<Uppdrag />} />
          <Route path="/jourhem" element={<Jourhem />} />
        </Routes>
      </Router>
      <Fab onClick={handleFabClick} />
      {isAddCatModalOpen && <AddCatModal onClose={handleCloseAddCatModal} />}
    </div>
  );
}

export default App;

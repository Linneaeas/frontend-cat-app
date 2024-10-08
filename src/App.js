import React from "react";
import { Global } from "@emotion/react";
import Navbar from "./components/navbar.jsx";
import { globalStyles } from "./styles.js";
import Fab from "./components/fab.jsx";

function App() {
  const handleFabClick = () => {
    console.log("FAB Clicked!");
  };
  return (
    <div>
      <Global styles={globalStyles} />
      <Navbar />
      <Fab onClick={handleFabClick} />
    </div>
  );
}

export default App;

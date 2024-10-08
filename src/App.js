import React from "react";
import { Global } from "@emotion/react";
import Navbar from "./navbar";
import { globalStyles } from "./styles.js";

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <Navbar />
    </div>
  );
}

export default App;

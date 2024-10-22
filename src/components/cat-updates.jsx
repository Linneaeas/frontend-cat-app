import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Connect to backend

const CatUpdates = () => {
  const [catUpdates, setCatUpdates] = useState([]);

  useEffect(() => {
    // Listen for real-time updates from the backend
    socket.on("cat-updated", (update) => {
      console.log("Real-time update received:", update);
      setCatUpdates((prevUpdates) => [...prevUpdates, update]);
    });

    // Clean up the effect when the component is unmounted
    return () => {
      socket.off("cat-updated");
    };
  }, []);

  return (
    <div>
      <h2>Real-time Cat Updates</h2>
      <ul>
        {catUpdates.map((update, index) => (
          <li key={index}>
            {JSON.stringify(update)} {/* Display the update */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatUpdates;

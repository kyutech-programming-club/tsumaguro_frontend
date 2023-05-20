import React from "react";
import "./App.css";
import GoogleMapComponent from "./components/GoogleMaps";
import { Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Routes>
      <Route path="/mapPage" element={<MapPage />} />
    </Routes>
  );
}

export default App;

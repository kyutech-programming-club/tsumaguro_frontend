import React from "react";
import "./App.css";
import GoogleMapComponent from "./components/GoogleMapComponent";
import { Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import { GoogleMap } from "@react-google-maps/api";

function App() {
  console.log("test")
  return (
    // <GoogleMapComponent
    //   pos={{
    //     lat: 43.048225,
    //     lng: 141.49701,
    //   }}
    // />
    <Routes>
      <Route path="/" element={<MapPage />} />
    </Routes>
  );
}

export default App;

import React from "react";
import "./App.css";
import GoogleMapComponent from "./components/GoogleMapComponent";
import MapPage from "./pages/MapPage";
import { GoogleMap } from "@react-google-maps/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Mypage from "./pages/Mypage";

const App = () => {
  return (
    <Routes>
      <Route path={`/register/`} element={<Register />} />
      <Route path={`/login/`} element={<Login />} />
      <Route path={`/`} element={<Mypage />} />
      <Route path={`/mapPage/`} element={<MapPage />} />
    </Routes>
  );
};

export default App;

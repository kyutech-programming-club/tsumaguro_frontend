//↓　前のやつ

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import GoogleMapComponent from "./components/GoogleMaps";

// function App() {
//   return (
//     <>
//       {/* <GoogleMapComponent /> */}
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css"
import GoogleMapComponent from "./components/GoogleMapComponent";
import MapPage from "./pages/MapPage";
import { GoogleMap } from "@react-google-maps/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Mypage from "./Mypage";

const App = () => {
  console.log("test")
  return (
  
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Mypage />} />
          <Route path={`/mypage/`} element={<MapPage />} />
        </Routes>
    
  );
};

export default App;
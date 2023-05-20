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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Mypage from "./Mypage";
import GoogleMapComponent from "./components/GoogleMaps";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
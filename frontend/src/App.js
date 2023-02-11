import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Admin from "./Components/admin";
// import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

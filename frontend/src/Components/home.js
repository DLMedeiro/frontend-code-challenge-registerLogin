import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Link
        id="btn-main"
        role="button"
        className="btn btn-lg btn-block"
        to="/admin"
      >
        Admin Page
      </Link>
    </div>
  );
}

export default Home;

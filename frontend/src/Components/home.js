import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Yodlr Design Challenge</h1>
      <Link
        id="btn-main"
        role="button"
        className="btn btn-lg btn-block"
        to="/admin"
      >
        Admin Page
      </Link>
      <br></br>
      <Link
        id="btn-main"
        role="button"
        className="btn btn-lg btn-block"
        to="/registration"
      >
        Registration Page
      </Link>
    </div>
  );
}

export default Home;

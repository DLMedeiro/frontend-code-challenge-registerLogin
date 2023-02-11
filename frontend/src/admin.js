import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Admin from "./admin";
import RegisterLoginApi from "./api";
// import NavBar from "./NavBar";
// import { Route, Switch } from "react-router-dom";
// import Menu from "./Menu";
// import MenuItem from "./MenuItem";
// import NewItem from "./NewItem";

// No updates required if changes are made to database structure

function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  // Provides content for time gap in response from API

  const [allUsers, setAllUsers] = useState([]);
  // Holds content received from API

  const [update, setUpdate] = useState();
  // Used to initiate new API call if a new item is added

  useEffect(() => {
    async function getUsers() {
      let users = await RegisterLoginApi.getAllUsers();
      setAllUsers(users);
      setIsLoading(false);
    }
    getUsers();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <ul>
        {allUsers.data.map((user) => (
          <li>
            {user.firstName} {user.lastName} : {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;

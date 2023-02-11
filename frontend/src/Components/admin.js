import React, { useState, useEffect } from "react";
import RegisterLoginApi from "../api";

function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  // Provides content for time gap in response from API

  const [allUsers, setAllUsers] = useState([]);
  // Holds content received from API

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
    <div>
      <ul>
        {allUsers.data.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} : {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;

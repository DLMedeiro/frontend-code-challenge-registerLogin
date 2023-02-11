import React, { useState, useEffect } from "react";
import RegisterLoginApi from "../api";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

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
    <section>
      <Card>
        <h1>Administration Page</h1>
        <CardBody className="text-center">
          <h3>User Data</h3>
          <ul>
            {allUsers.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName} : {user.email}
              </li>
            ))}
          </ul>
          <Link
            id="btn-main"
            role="button"
            className="btn btn-lg btn-block"
            to="/"
          >
            Home Page
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Admin;

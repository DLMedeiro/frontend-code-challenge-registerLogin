import React, { useState, useEffect } from "react";
import RegisterLoginApi from "../api";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

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
          <Card>
            {allUsers.map((user) => (
              <CardBody key={user.id}>
                <CardTitle tag="h5" className="font-weight-bold">
                  {user.firstName} {user.lastName}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {user.email}
                </CardSubtitle>
              </CardBody>
            ))}
          </Card>
          <Link id="btn" role="button" className="button-main" to="/">
            Home Page
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Admin;

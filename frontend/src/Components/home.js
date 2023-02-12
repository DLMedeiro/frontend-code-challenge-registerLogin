import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

function Home() {
  return (
    <section>
      <Card>
        <h1>Yodlr Design Challenge</h1>
        <CardBody className="text-center card-body-form">
          <Link id="btn" className="button-submit" role="button" to="/admin">
            Admin Page
          </Link>

          <Link
            id="btn"
            className="button-submit"
            role="button"
            to="/registration"
          >
            Registration Page
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

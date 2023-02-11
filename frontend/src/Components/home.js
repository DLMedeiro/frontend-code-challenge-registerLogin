import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

function Home() {
  return (
    <section>
      <Card>
        <h1>Yodlr Design Challenge</h1>
        <CardBody className="text-center">
          <div className="button-submit">
            <Link id="btn" role="button" to="/admin">
              Admin Page
            </Link>
          </div>
          <div className="button-submit">
            <Link id="btn" role="button" to="/registration">
              Registration Page
            </Link>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

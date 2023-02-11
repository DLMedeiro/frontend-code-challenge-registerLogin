import React, { useState, useEffect } from "react";
import RegisterLoginApi from "../api";
import { Link } from "react-router-dom";
import { Card, CardBody, Label, Input, FormGroup, Form } from "reactstrap";

function Registration() {
  const INITIAL_STATE = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [userName, setUserName] = useState("");
  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    setFormComplete(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const add = async (userData) => {
    await RegisterLoginApi.addUser(userData);
    // setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(formData);
    setUserName(formData.firstName);
    setFormComplete(true);
    setFormData(INITIAL_STATE);
  };
  return (
    <section>
      <Card>
        <h1>Yodlr Registration Portal</h1>
        <CardBody className="text-center card-body-form">
          {formComplete ? (
            <h3>Congratulations {userName}, your registration is complete</h3>
          ) : (
            <div>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="firstName">First Name:</Label>
                  <Input
                    className="form-control"
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name:</Label>
                  <Input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    required
                  />
                </FormGroup>

                <button id="btn" className="button-submit" type="submit">
                  Submit Email
                </button>
              </Form>
            </div>
          )}
          <Link id="btn" role="button" className="button-main" to="/">
            Home Page
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Registration;

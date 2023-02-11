import React, { useState } from "react";
import RegisterLoginApi from "../api";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
} from "reactstrap";

function Registration() {
  const INITIAL_STATE = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

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
    // setLoading(true);
    setFormData(INITIAL_STATE);
  };
  return (
    <section>
      <Card>
        <h1>Yodlr Registration Portal</h1>
        <CardBody className="text-center">
          {/* {loading ? (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#c19595" />
            </View>
          ) : (
            ""
          )} */}
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
              />
            </FormGroup>

            <Button
              id="btn-login"
              className="btn btn-lg btn-block"
              type="submit"
            >
              Submit Email
            </Button>
          </Form>
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

export default Registration;

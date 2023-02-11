import React, { useState, useEffect } from "react";
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
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

            <Button
              id="btn-login"
              className="btn btn-lg btn-block"
              type="submit"
            >
              Submit Email
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default Registration;

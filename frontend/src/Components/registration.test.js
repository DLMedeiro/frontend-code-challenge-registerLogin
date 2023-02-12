// Jest encountered an unexpected token

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Registration from "./registration.js";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Registration />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

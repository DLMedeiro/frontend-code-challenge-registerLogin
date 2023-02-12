const request = require("supertest");
const users = require("../init_data.json").data;
const app = require("../index");

describe("POST /", function () {
  test("register user", async function () {
    const resp = await request(app).post("/users").send({
      email: "new@email.com",
      firstName: "First-new",
      lastName: "Last-newL",
    });
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({
      email: "new@email.com",
      firstName: "First-new",
      lastName: "Last-newL",
      id: expect.any(Number),
      state: "pending",
    });
    const resp2 = await request(app).delete("/users/5");
    expect(resp2.statusCode).toEqual(204);
  });

  test("bad request if missing data", async function () {
    const resp = await request(app).post("/users").send({
      username: "u-new",
    });
    expect(resp.statusCode).toEqual(500);
  });
});

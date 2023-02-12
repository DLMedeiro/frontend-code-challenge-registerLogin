var express = require("express");
var router = express.Router();
var _ = require("lodash");
var logger = require("../lib/logger");
var log = logger();

var users = require("../init_data.json").data;
var curId = _.size(users);
/* GET users listing. */
router.get("/", function (req, res) {
  res.json(_.toArray(users));
});

/* Create a new user */
router.post("/", function (req, res, next) {
  try {
    const { email, firstName, lastName } = req.body;
    var user = req.body;
    user.id = curId++;
    if (!user.email || !user.firstName || !user.lastName) {
      throw new Error("Missing Data");
    }
    if (!user.state) {
      user.state = "pending";
    }
    users[user.id] = { email, firstName, lastName };
    log.info("Created user", user);
    log.info("body", { email, firstName, lastName });
    res.json(user);
    return res.status(200);
  } catch (err) {
    return next(err);
  }
});

/* Get a specific user by id */
router.get("/:id", function (req, res, next) {
  var user = users[req.params.id];
  if (!user) {
    return next();
  }
  res.json(users[req.params.id]);
});

/* Delete a user by id */
router.delete("/:id", function (req, res) {
  var user = users[req.params.id];
  delete users[req.params.id];
  res.status(204);
  log.info("Deleted user", user);
  res.json(user);
});

/* Update a user by id */
router.put("/:id", function (req, res, next) {
  var user = req.body;
  if (user.id != req.params.id) {
    return next(new Error("ID paramter does not match body"));
  }
  users[user.id] = user;
  log.info("Updating user", user);
  res.json(user);
});

module.exports = router;

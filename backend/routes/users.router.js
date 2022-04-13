const fs = require("fs");
const { Router } = require("express");
const router = Router();
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");
const {
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/users.controller");

// get all users
router.get("/users", checkAuth, getAllUsers);

// get user by id
router.get("/users/:id", checkAuth, getUser);

// add new user
router.post("/users", timeStamp, createUser);

module.exports = router;

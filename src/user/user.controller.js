const express = require("express");
const prisma = require("../db");

const {
  getAllUser,
  getUserId,
} = require("./user.service");

const router = express.Router();

router.get("/user", async (req, res) => {
  const users = await getAllUser();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserId(userId);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;

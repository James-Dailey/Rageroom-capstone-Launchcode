const express = require("express");
const authRoutes = require("./Auth/authRoutes");

let router = express.Router();

router.use("/auth/", authRoutes);

module.exports = router;

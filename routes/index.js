const express = require("express");
const router = express.Router();
const usr = require("./usr");

router.use("/usr", usr);

module.exports = router;

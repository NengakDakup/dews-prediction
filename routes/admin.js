const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin", {
    title: "Admin DEWS | ",
    page: "admin",
  });
});

module.exports = router;

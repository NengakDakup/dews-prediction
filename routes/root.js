const express = require("express");
const router = express.Router();

const lgas = require('../json.json');

const states = [
'Yobe',
'Jigawa',
'Kano',
'Zamfara',
'Sokoto',
'Kebbi',
'Kaduna',
'Niger',
'Kwara',
'Kogi',
'FCT',
'Plateau',
'Nasarawa',
'Bauchi',
'Gombe',
'Adamawa',
'Taraba',
'Benue',
'Kastina',
]



// @route   /
// @desc    Returns the Home Page
// @access  public
router.get("/", (req, res) => {
  res.render("index", {
    title: "DEWS | Home Page",
    page: "home",
  });
});

// @route   /about
// @desc    Returns the About Page
// @access  public
router.get("/about", (req, res) => {
  res.render("about", {
    title: "DEWS | About Us",
    page: "about",
  });
});

// @route   /map
// @desc    Returns the Map Page
// @access  public
router.get("/map", (req, res) => {
  res.render("map", {
    title: "DEWS | Map",
    page: "map",
    states
  });
});

// @route   /prediction
// @desc    Returns the Blog Page
// @access  public
router.get("/prediction", (req, res) => {
  let state = req.query.state;
  let list = lgas.filter(lga => lga.state.toLowerCase() === state.toLowerCase() )
  console.log(list[0]);
  res.render("prediction", {
    title: "DEWS | Prediction",
    page: "prediction",
    state,
    list: list[0].lgas
  });
});

// @route   /team
// @desc    Returns the team Page
// @access  public
router.get("/team", async (req, res) => {
  res.render("team", {
    title: "DEWS | Our team",
    page: "team",
  });
});

// @route   /contact
// @desc    Returns the Contact Page
// @access  public
router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "DEWS | Contact Us",
    page: "contact",
  });
});

// @route   /faq
// @desc    Returns the faq Page
// @access  public
router.get("/faq", (req, res) => {
  res.render("faq", {
    title: "DEWS | faq",
    page: "faq",
  });
});

module.exports = router;

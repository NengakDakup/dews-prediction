const express = require("express");
const router = express.Router();

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
  res.render("prediction", {
    title: "DEWS | Prediction",
    page: "prediction",
    state
  });
});

// @route   /gallery
// @desc    Returns the Gallery Page
// @access  public
router.get("/gallery", async (req, res) => {
  let images = fetchImages();
  res.render("gallery", {
    title: "DEWS | Our Gallery",
    data,
    page: "gallery",
    images
  });
});

// @route   /contact
// @desc    Returns the Contact Page
// @access  public
router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "DEWS | Contact Us",
    page: "contact",
    data: data,
  });
});

// @route   /support
// @desc    Returns the Support Page
// @access  public
router.get("/support", (req, res) => {
  res.render("support", {
    title: "DEWS | Support Us",
    page: "support",
    data: data,
  });
});

module.exports = router;

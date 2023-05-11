// Import Dependencies
const express = require("express");
const cors = require("cors");

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send about via JSON
  res.json(about);
});


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`🔥🔥🔥listening on PORT ${PORT}🔥🔥🔥`));
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");
const cors = require("cors");

const app = express();

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.use(express.json());

app.use(cors());

let locations;
(async () => {
  locations = await db.select().table("locations");
  locations = locations.map((location) => {
    return {
      id: location.id,
      amenities: JSON.parse(location.amenities),
      latitude: location.latitude,
      longitude: location.longitude,
      name: location.name,
      fuelPrices: JSON.parse(location.fuelPrices),
      highway: location.highway,
      address: JSON.parse(location.address)[0],
      exitNumber: location.exitNumber,
      restaurants: JSON.parse(location.restaurants),
      phoneNumber: location.phoneNumber,
    };
  });
})();

app.get("/api/locations", async (req, res) => {
  try {
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/cities", async (req, res) => {
  try {
    let cities = locations.map((location) => location.address.city);
    res.send(cities);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/states/", async (req, res) => {
  try {
    let states = locations
      .map((a) => a.address.state)
      .filter((val, ind, arr) => arr.indexOf(val) === ind);
    res.send(states);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/states/:sName", async (req, res) => {
  try {
    const { sName } = req.params;
    const state = locations.filter(
      (location) => location.address.state === sName
    );
    res.send(state);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/states/:sName/cities/:cName", async (req, res) => {
  try {
    const { sName } = req.params;
    const { cName } = req.params;
    let cityInfo = locations.filter(
      (location) =>
        location.address.state == sName && location.address.city.match(cName)
    );
    res.send(cityInfo);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/highways/:hName", async (req, res) => {
  try {
    const { hName } = req.params;
    const highwayInfo = locations.filter(
      (location) => location.highway === hName
    );
    res.send(highwayInfo);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/highways", async (req, res) => {
  res.send(
    locations
      .map((location) => location.highway)
      .filter(
        (highway, index, arr) => arr.indexOf(highway) === index && highway
      )
  );
});

app.get("/api/amenities", async (req, res) => {
  const amenities = [].concat
    .apply(
      [],
      locations.map((location) => location.amenities)
    )
    .filter((amm, ind, arr) => arr.indexOf(amm) === ind);
  res.send(amenities);
});

app.get("/api/amenities/:aName", async (req, res) => {
  const { aName } = req.params;
  res.send(locations.filter((location) => location.amenities.includes(aName)));
});

app.get("/api/cities/:cName/fuelPrices", (req, res) => {
  const { cName } = req.params;
  res.send(
    locations
      .filter((location) => location.address.city.match(cName))
      .map((a) => a.fuelPrices)[0]
  );
});

app.get("/api/states/:sName/cities", (req, res) => {
  const { sName } = req.params;
  res.send(
    locations
      .filter((location) => location.address.state === sName)
      .map((location) => location.address.city)
      .filter((v, i, a) => a.indexOf(v) === i)
  );
});

app.get("/api/restaurants", (req, res) => {
  let restaurants = [].concat.apply(
    [],
    locations.map((location) => location.restaurants)
  );
  restaurants = restaurants.filter((v, i, a) => a.indexOf(v) === i);
  res.send(restaurants);
});

// Always return the main index.html, since we are developing a single page application
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
// });

module.exports = app;

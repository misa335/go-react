const fs = require("fs");
const db = require("../server/knex.js");np

(async () => {
  try {
    const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
    for (const location of locations) {
      const id = location.Site.SiteId;
      const amenities = JSON.stringify(location.AdditionalAmenities.map(amenity =>amenity.SiteManagementItem.Title))
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SitePreferredName;
      const fuelPrices = JSON.stringify(location.Site.FuelPrices.map(price => {
        return {
          type: price.FuelType,
          price: price.CashPrice
        }
      }))
      const highway = location.Site.Highway
      const address = JSON.stringify(location.Addresses.map( address => {
        return {
          address1: address.Address1,
          address2: address.Address2,
          city: address.City,
          state: address.State,
          zip: address.Zip
        }
      }));
      const exitNumber = location.Site.ExitNumber;
      const restaurants = JSON.stringify(location.Site.Concepts.map(concept=> concept.Concept.Name));
      const result = {
        id,
        amenities,
        latitude,
        longitude,
        name,
        fuelPrices,
        highway,
        address,
        exitNumber,
        restaurants
      }
      const result = await db("locations").insert({
        id,
        amenities,
        latitude,
        longitude,
        name,
        fuelPrices,
        highway,
        address,
        exitNumber,
        restaurants
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();

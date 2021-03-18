const chai = require("chai");
const expect = chai.expect;
const describe = require("mocha").describe;
const it = require("mocha").it;
const fetch = require("node-fetch");

describe("Backend", () => {
  describe.only("/api/locations", () => {
    it("should return all locations", async () => {
      const req = await fetch(
        "http://localhost:9000/api/locations"
      ).then((res) => res.json());
      expect(req.length).to.equal(432);
    });
  });
  describe("/api/cities", () => {
    it("should", async () => {
      const req = await fetch("http://localhost:9000/api/cities").then((res) =>
        res.json()
      );
      console.log(req);
    });
  });
  describe("/api/states", () => {
    it("should", async () => {
      const req = await fetch("http://localhost:9000/api/states").then((res) =>
        res.json()
      );
      console.log(req);
    });
  });
  describe("/api/states/:sName", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/states/KS"
      ).then((res) => res.json());
      console.log(req);
    });
  });
  describe("/api/states/:sName/cities/:cName", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/states/GA/cities/Waco"
      ).then((res) => res.json());
      console.log(req);
    });
  });
  describe("/api/highways/:hName", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/highways/I-5"
      ).then((res) => res.json());
      console.log(req);
    });
  });
  describe("/api/highways", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/highways"
      ).then((res) => res.json());
      console.log(req);
    });
  });
  describe("/api/amenities", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/amenities"
      ).then((res) => res.json());
      console.log(req);
    });
  });
  describe("/api/amenities/:aName", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/amenities/Permit Fax"
      ).then((res) => res.json());
      console.log(req.length);
    });
  });
  describe("/api/cities/:cName/fuelPrices", () => {
    it("should", async () => {
      const req = await fetch(
        "http://localhost:9000/api/cities/Waco/fuelPrices"
      ).then((res) => res.json());
      console.log(req);
    });
  });
});

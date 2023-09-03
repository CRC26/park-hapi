import { db } from "../models/db.js";

export const parksController = {
  index: {
    handler: async function (request, h) {
      const counties = await db.countyStore.getAllCounties();
      return h.view("addPark", { title: "Add a Park", counties: counties });
    },
  },
  report: {
    handler: async function (request, h) {
      const parks = await db.parkStore.getAllParks();
      return h.view("Report", {
        title: "Parks to Date",
        parks: parks,
      });
    },
  },
  addPark: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCounty = request.payload.county.split(",");
        const county = await db.countyStore.findByName(rawCounty[0], rawCounty[1]);
        await db.countyStore.addPark(request.payload.parkName, request.payload.rating, request.payload.lat, request.payload.lng, loggedInUser._id, county._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
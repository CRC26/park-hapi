import { db } from "../models/db.js";

export const parksController = {
  index: {
    handler: async function (request, h) {
      const parks = await db.parkStore.getAllParks();
      return h.view("AddPark", { title: "Add a Park", parks: parks });
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
          await db.parkStore.addPark(request.payload.parkName, request.payload.countyName, request.payload.lat,request.payload.lng,loggedInUser._id);
          return h.redirect("/report");
        } catch (err) {
          return h.view("main", { errors: [{ message: err.message }] });
        }
      },
    },
  };
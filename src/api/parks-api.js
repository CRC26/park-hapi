import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const parksApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const parks = db.parkStore.getAllParks();
      return parks;
      },
    },

addPark: {
  auth: {
    strategy: "jwt",
  },
  handler: async function (request, h) {
    const park = await db.parkStore.addPark(
        request.payload.parkName,
        request.payload.parkCounty,
        request.payload.lat,
        request.payload.lng,
    );
      return park
   },
  },


  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.parkStore.deleteAll();
      return { success: true };
    },
  },
};
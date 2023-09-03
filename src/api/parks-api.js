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
  findByCounty: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const parks = await db.parkStore.getParksByCounty(request.params.id);
      return parks;
    },
  },

  makePark: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const county = await db.countyStore.findById(request.params.id);
      if (!county) {
        return Boom.notFound("No County with this id");
      }
      const park = await db.parkStore.addPark(
        request.payload.parkName,
        request.payload.rating,
        request.payload.lat,
        request.payload.lng,
        request.auth.credentials,
        county
      );
      return park;
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
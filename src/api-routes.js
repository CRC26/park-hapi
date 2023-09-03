import { userApi } from "./api/users-api.js";
import { parksApi } from "./api/parks-api.js";
import { countiesApi } from "./api/county-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/parks", config: parksApi.findAll },
  { method: "GET", path: "/api/county/{id}/parks", config: parksApi.findByCounty },
  { method: "POST", path: "/api/county/{id}/parks", config: parksApi.makePark },
  { method: "DELETE", path: "/api/parks", config: parksApi.deleteAll },

  { method: "GET", path: "/api/county", config: countiesApi.find },
  { method: "GET", path: "/api/county/{id}", config: countiesApi.findOne },
  { method: "POST", path: "/api/county", config: countiesApi.create },
  { method: "DELETE", path: "/api/county/{id}", config: countiesApi.deleteOne },
  { method: "DELETE", path: "/api/county", config: countiesApi.deleteAll },
];

import { userApi } from "./api/users-api.js";
import { parksApi } from "./api/parks-api.js";


export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/parks", config: parksApi.findAll },
  { method: "POST", path: "/api/parks", config: parksApi.addPark },
  { method: "DELETE", path: "/api/parks", config: parksApi.deleteAll },
 
];

import { userMongoStore } from "./mongo/user-mongo-store.js";
import { parkMongoStore } from "./mongo/park-mongo-store.js";
import { countyMongoStore } from "./mongo/county-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  parkStore:null,
  countyStore:null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.parkStore = parkMongoStore;
        this.countyStore = countyMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};

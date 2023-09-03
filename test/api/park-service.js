import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const parkService = {
  parkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.parkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.parkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.parkUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.parkUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.parkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async makePark(id, park) {
    const response = await axios.post(`${this.parkUrl}/api/county/${id}/parks`, park);
    return response.data;
  },

  async getParks(id) {
    const response = await axios.get(`${this.parkUrl}/api/county/${id}/parks`);
    return response.data;
  },

  async createCounty(newCounty) {
    const response = await axios.post(`${this.parkUrl}/api/county`, newCounty);
    return response.data;
  },
};
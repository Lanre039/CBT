import axios from "axios";

// fetch token from localStorage
const token = localStorage.getItem("cbt_token") || null;

export const examPortal = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    // add other headers here
  },
  // timeout: 1000,
  withCredentials: true,
});

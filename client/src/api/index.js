import axios from "axios";

// fetch token from localStorage
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWZmZjY3NGI5MjY2NTAzY2JjZjkyMyIsInJvbGVJZCI6IjVmYWZlNTMzMzI0OTZkNjBiMGJjMzhjOCIsImlhdCI6MTYwNTk0MTI3MywiZXhwIjoxNjA1OTQ0ODczfQ.ywPmnqgJlGjGJ9PaLVBgjQHOK1Qf1xPkyR-CCbansjY";

export const examPortal = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    // add other headers here
  },
  timeout: 1000,
  withCredentials: true,
});

import axios from 'axios';

// fetch token from localStorage
// const token = localStorage.getItem("cbt_token") || null;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWZmZjY3NGI5MjY2NTAzY2JjZjkyMyIsInJvbGVJZCI6IjVmYWZlNTMzMzI0OTZkNjBiMGJjMzhjOCIsImlhdCI6MTYwNjE1NjIyMCwiZXhwIjoxNjA2MTU5ODIwfQ.mVgZyhYt0t5lopehFr5ujY5ORRHFgGWgvPQG6drmNKc';

export const examPortal = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    // add other headers here
  },
  // timeout: 1000,
  withCredentials: true,
});

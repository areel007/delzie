import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
  withCredentials: true, // send cookies like refreshToken
  headers: {
    "Cache-Control": "no-cache",
  },
});

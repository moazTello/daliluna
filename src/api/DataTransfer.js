import axios from "axios";
const BASE_URL = "https://daliluna.ltd/api/";
export const url_storage = "https://daliluna.ltd/storage";
export const paginateNumber = "10";
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "en",
    country: "SYr",
  },
});
export const axiosPrivateTokenized = axios.create({
    baseURL: BASE_URL,
});

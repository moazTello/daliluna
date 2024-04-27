import axios from "axios";
const BASE_URL = "https://daliluna.ltd/api/";
export const url_storage = "https://daliluna.ltd/storage";
export const paginateNumber = "10";

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { url } from "../../constant/config";


// export const checkIfAuth = createAsyncThunk(
//     'auth/checkIfAuth',
//     async (data1, thunkAPI) => {
//         const { rejectWithValue } = thunkAPI;

//         try {
//             const token = localStorage.getItem('token');

//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };

//             const response = await axios.get(`${url}/checkIfAuth`, {
//                 headers: headers
//             });

//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );



export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    // 'Content-Type': 'application/json',
    // 'Accept': 'application/json',
    // 'Accept-Language':'en',
    // 'country':'SYr'
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "en",
    country: "SYr",
  },
});
export const axiosPrivateTokenized = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //     Accept: "application/json",
    //     "Accept-Language": "ar",
    //     country: "SYr",
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${localStorage?.getItem("token")}`,
    //     Authorization: `Bearer ${localStorage.getItem('token')}`,
    // },
  });
